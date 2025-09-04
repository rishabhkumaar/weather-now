const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY || "eb82dca0c73c54d81bc7f4dd3ece8dfc"; // Use env for security

export async function getWeather(city = "Muzaffarpur") {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    return await res.json();
  } catch (err) {
    return { cod: 500, message: "Network error" };
  }
}

export async function getForecast(city = "Muzaffarpur") {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );
    return await res.json();
  } catch (err) {
    return { cod: 500, message: "Network error" };
  }
}
