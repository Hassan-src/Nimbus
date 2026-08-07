const BASE_URL = `https://api.weatherapi.com/v1`;
const KEY = import.meta.env.VITE_WEATHER_API_KEY;
async function fetchWeather(type) {
  const response = await fetch(`${BASE_URL}/${type}`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.error?.message);
  return data;
}

export function getCityWeatherCurrent(city) {
  return fetchWeather(
    `current.json?key=${KEY}&q=${encodeURIComponent(city)}&aqi=no`,
  );
}

export function getFutureForcast(city, days = 6) {
  return fetchWeather(
    `forecast.json?key=${KEY}&q=${encodeURIComponent(
      city,
    )}&days=${days}&aqi=no&alerts=no`,
  );
}
