import useWeatherPost from "../../context/useWeatherPost";
import styles from "./TodayDetails.module.css";

import sunny from "../../assets/Weather-sunny.svg";
import mist from "../../assets/Weather-mist.svg";
import night from "../../assets/Weather-night.svg";
import partlyCloudy from "../../assets/Weather-partlycloudy.svg";
import partlyCloudyNight from "../../assets/Weather-partlycloudynight.svg";
import snowy from "../../assets/Weather-snow.svg";
import storm from "../../assets/Weather-storm.svg";
import thunderStorm from "../../assets/Weather-thunder.svg";
import cloudy from "../../assets/cloudy.svg";
import Loader from "../Loader/Loader";

function TodayDetails() {
  const {
    curWeatherCondition,
    curWeatherConditionCode,
    curContry,
    curCity,
    isDay,
    todayDataMaxTemp,
    todayDataMinTemp,
    curTemp,
    futureDataLoading,
    futureDataError,
    cityLoading,
    cityError,
  } = useWeatherPost();

  function getWeatherCon(code, isDay) {
    if (code === 1000) return isDay ? sunny : night;
    if (code === 1003) return isDay ? partlyCloudy : partlyCloudyNight;
    if ([1006, 1009].includes(code)) return cloudy;
    if ([1030, 1135, 1147].includes(code)) return mist;
    if (code >= 1063 && code <= 1201) return storm;
    if (code >= 1210 && code <= 1264) return snowy;
    if (code >= 1273) return thunderStorm;
  }
  const weather = getWeatherCon(curWeatherConditionCode, isDay);
  if (futureDataLoading || cityLoading) return <Loader />;
  if (cityError || futureDataError) return;
  return (
    <div className={styles.leftSide}>
      <img className={styles.weatherImage} src={weather} alt="WeatherType" />
      <div className={styles.info}>
        <p className={styles.weatherCondition}>{curWeatherCondition}</p>
        <p className={styles.location}>
          {curContry} - {curCity}
        </p>
        <span className={styles.mainTemp}>{Math.round(curTemp)}°C</span>
        <span className={styles.highTemp}>
          {Math.round(todayDataMaxTemp)}°
          <span className={styles.lowTemp}>
            {Math.round(todayDataMinTemp)}°
          </span>
        </span>
      </div>
    </div>
  );
}

export default TodayDetails;
