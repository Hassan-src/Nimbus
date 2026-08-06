import { useEffect, useState } from "react";
import { getCityWeatherCurrent } from "../services/api.js";

function useCityWeatherCurrent(city) {
  const [curWeather, setCurWeather] = useState(null);
  const [curWeatherCondition, setCurWeatherCondition] = useState(null);
  const [curWeatherConditionCode, setCurWeatherConditionCode] = useState(null);
  const [curContry, setCurCountry] = useState("");
  const [curCity, setCurCity] = useState("");
  const [curLocalTime, setCurLocalTime] = useState("");
  const [curDate, setCurDate] = useState("");
  const [isDay, setIsDay] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(
    function () {
      if (!city) return;
      async function CityWeather() {
        try {
          setLoading(true);
          const data = await getCityWeatherCurrent(city);
          const dateTime = data?.location?.localtime;
          const [date, time] = dateTime.split(" ");
          setCurWeather(data);
          setCurWeatherCondition(data?.current?.condition?.text);
          setCurWeatherConditionCode(data?.current?.condition?.code);
          setCurCountry(data?.location?.country);
          setCurCity(data?.location?.name);
          setCurLocalTime(time);
          setCurDate(date);
          setIsDay(data?.current?.is_day);
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
    curWeatherConditionCode,
    curContry,
    curCity,
    curLocalTime,
    curDate,
    isDay,
  };
}

export default useCityWeatherCurrent;
