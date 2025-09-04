const apiKey = "eb82dca0c73c54d81bc7f4dd3ece8dfc";

export async function getWeather(city = "Muzaffarpur") {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  return res.json();
}

export async function getForecast(city = "Muzaffarpur") {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
  );
  return res.json();
}
