import { useEffect, useState } from "react";
import { getWeather, getForecast } from "./api";
import WeatherCard from "./components/WeatherCard";
import ForecastChart from "./components/ForecastChart";
import ForecastGrid from "./components/ForecastGrid";

export default function App() {
  const [city, setCity] = useState("Muzaffarpur");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchWeather(city);
    // eslint-disable-next-line
  }, []);

  async function fetchWeather(cityName) {
    setLoading(true);
    setError("");
    try {
      const current = await getWeather(cityName);
      const forecastData = await getForecast(cityName);

      // Defensive checks for API errors
      if (current.cod !== 200) {
        setError(current.message || "City not found");
        setWeather(null);
        setForecast(null);
        setLoading(false);
        return;
      }
      if (forecastData.cod !== "200") {
        setError(forecastData.message || "Forecast not available");
        setWeather(null);
        setForecast(null);
        setLoading(false);
        return;
      }

      setWeather(current);
      setForecast(forecastData);
    } catch (err) {
      setError("Failed to fetch weather data.");
      setWeather(null);
      setForecast(null);
    }
    setLoading(false);
  }

  const hourly =
    forecast && forecast.list
      ? forecast.list.slice(0, 10).map((f) => ({
          time: new Date(f.dt * 1000).toLocaleTimeString([], { hour: "2-digit" }),
          temp: f.main.temp,
          humidity: f.main.humidity,
          icon: `https://openweathermap.org/img/wn/${f.weather[0].icon}.png`,
          desc: f.weather[0].description,
        }))
      : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white font-sans p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold flex items-center gap-2 mb-6">
          🌦 Weather Now
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 p-3 rounded-xl text-black"
            onKeyDown={(e) => {
              if (e.key === "Enter") fetchWeather(city);
            }}
          />
          <button
            onClick={() => fetchWeather(city)}
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-yellow-300"
            disabled={loading}
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </div>

        {error && (
          <div className="bg-red-500/80 text-white p-3 rounded-xl mb-6">
            {error}
          </div>
        )}

        {weather && forecast && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <WeatherCard
                label="Temperature"
                value={`${weather.main.temp}°C`}
                icon="🌡"
              />
              <WeatherCard
                label="Humidity"
                value={`${weather.main.humidity}%`}
                icon="💧"
              />
              <WeatherCard
                label="Wind"
                value={`${weather.wind.speed} km/h`}
                icon="💨"
              />
              <WeatherCard
                label="Condition"
                value={weather.weather[0].description}
                icon="☁️"
              />
            </div>

            <ForecastGrid items={hourly} />

            <div className="bg-white/10 rounded-2xl p-6 mt-6">
              <ForecastChart
                labels={forecast.list.slice(0, 40).map((f) =>
                  new Date(f.dt * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                )}
                temps={forecast.list.slice(0, 40).map((f) => f.main.temp)}
                hums={forecast.list.slice(0, 40).map((f) => f.main.humidity)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
