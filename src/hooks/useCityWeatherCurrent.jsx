import { useEffect, useState } from "react";
import { getCityWeatherCurrent } from "../services/api.js";

function useCityWeatherCurrent(city) {
  const [curWeather, setCurWeather] = useState(null);
  const [curWeatherCondition, setCurWeatherCondition] = useState(null);
  const [curContry, setCurCountry] = useState("");
  const [curCity, setCurCity] = useState("");
  const [curLocalTime, setCurLocalTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(
    function () {
      if (!city) return;
      async function CityWeather() {
        try {
          setLoading(true);
          const data = await getCityWeatherCurrent(city);
          setCurWeather(data);
          setCurWeatherCondition(data?.current?.condition?.text);
          setCurCountry(data?.location?.country);
          setCurCity(data?.location?.name);
          setCurLocalTime(data?.location?.localtime);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
      CityWeather();
    },
    [city],
  );
  return {
    loading,
    error,
    curWeather,
    curWeatherCondition,
    curContry,
    curCity,
    curLocalTime,
  };
}

export default useCityWeatherCurrent;
