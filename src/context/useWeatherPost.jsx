import { useContext } from "react";
import { WeatherContext } from "./MainProvider";

function useWeatherPost() {
  const context = useContext(WeatherContext);
  if (context === undefined)
    throw new Error("Context used outside the provider!");
  return context;
}

export default useWeatherPost;
