import { useEffect, useState } from "react";
import { getFutureForcast } from "../services/api";

function useFutureForcast(city) {
  const [futureData, setFutureData] = useState(null);
  const [todayDataMaxTemp, setTodayMaxTemp] = useState("");
  const [todayDataMinTemp, setTodayMinTemp] = useState("");
  const [todaySunRise, setTodaySunRise] = useState("");
  const [todaySunSet, setTodaySunSet] = useState("");
  const [error, setError] = useState(null);
  const [loadig, setLoading] = useState(false);
  useEffect(
    function () {
      if (!city) return;
      async function Future() {
        setFutureData(null);
        setTodayMaxTemp("");
        setTodayMinTemp("");
        setTodaySunRise("");
        setTodaySunSet("");
        setError(null);
        try {
          setLoading(true);
          const data = await getFutureForcast(city);
          setFutureData(data?.forecast);
          setTodayMaxTemp(data?.forecast?.forecastday[0]?.day?.maxtemp_c);
          setTodayMinTemp(data?.forecast?.forecastday[0]?.day?.mintemp_c);
          setTodaySunRise(data?.forecast?.forecastday[0]?.astro?.sunrise);
          setTodaySunSet(data?.forecast?.forecastday[0]?.astro?.sunset);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
      Future();
    },
    [city],
  );
  return {
    futureData,
    todayDataMaxTemp,
    todayDataMinTemp,
    todaySunRise,
    todaySunSet,
    error,
    loadig,
  };
}

export default useFutureForcast;
