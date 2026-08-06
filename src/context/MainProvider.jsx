import { createContext } from "react";
import useCityWeatherCurrent from "../hooks/useCityWeatherCurrent";

const WeatherContext = createContext();
function MainProvider({ children }) {
  const {
    curWeather,
    curWeatherCondition,
    curWeatherConditionCode,
    curContry,
    curCity,
    curLocalTime,
    curDate,
    isDay,
  } = useCityWeatherCurrent("tehran");
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
        isDay,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { MainProvider, WeatherContext };
