import axios from "axios";
import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  try {
    const { city, lat, lon } = req.query;

    if (!city && !(lat && lon)) {
      return res.status(400).json({ error: "Provide city OR lat+lon" });
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Missing OpenWeather API key" });
    }

    const cacheKey = city ? `wx:city:${city}` : `wx:coords:${lat},${lon}`;
    const cached = await kv.get(cacheKey);

    if (cached && cached.current && cached.onecall) {
      return res.status(200).json({ ...cached, cached: true });
    }

    let current;
    if (city) {
      current = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: { q: city, units: "metric", appid: apiKey }
      });
    } else {
      current = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: { lat, lon, units: "metric", appid: apiKey }
      });
    }

    if (current.data.cod !== 200) {
      return res.status(current.data.cod).json({ error: current.data.message });
    }

    const { coord } = current.data;
    const onecall = await axios.get("https://api.openweathermap.org/data/2.5/onecall", {
      params: { lat: coord.lat, lon: coord.lon, exclude: "minutely,daily,alerts", units: "metric", appid: apiKey }
    });

    const result = { current: current.data, onecall: onecall.data };
    await kv.set(cacheKey, result, { ex: 600 }); // Cache 10 min

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
