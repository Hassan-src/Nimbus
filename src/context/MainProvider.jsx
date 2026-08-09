import { createContext, useState } from "react";
import useCityWeatherCurrent from "../hooks/useCityWeatherCurrent";
import useFutureForcast from "../hooks/useFutureForcast";

const WeatherContext = createContext();
function MainProvider({ children }) {
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("New York");
  const {
    curWeather,
    curWeatherCondition,
    curWeatherConditionCode,
    curContry,
    curCity,
    curLocalTime,
    curDate,
    isDay,
    curTemp,
    curChanceRain,
    curWindSpeed,
    curHumidity,
    loading: cityLoading,
    error: cityError,
  } = useCityWeatherCurrent(city);
  const {
    futureData,
    todayDataMaxTemp,
    todayDataMinTemp,
    todaySunRise,
    todaySunSet,
    error: futureDataError,
    loading: futureDataLoading,
  } = useFutureForcast(city);
  return (
    <WeatherContext.Provider
      value={{
        curWeather,
        curWeatherCondition,
        curWeatherConditionCode,
        curContry,
        curCity,
        curLocalTime,
        curDate,
        curTemp,
        curChanceRain,
        curWindSpeed,
        curHumidity,
        isDay,
        cityLoading,
        cityError,
        futureData,
        todayDataMaxTemp,
        todayDataMinTemp,
        todaySunRise,
        todaySunSet,
        futureDataError,
        futureDataLoading,
        search,
        setSearch,
        setCity,
        openSearch,
        setOpenSearch,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { MainProvider, WeatherContext };
