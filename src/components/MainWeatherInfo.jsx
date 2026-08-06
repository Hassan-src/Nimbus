import styles from "./MainWeatherInfo.module.css";
import useWeatherPost from "../context/useWeatherPost";
import sunny from "../assets/Weather-sunny.svg";
import mist from "../assets/Weather-mist.svg";
import night from "../assets/Weather-night.svg";
import partlyCloudy from "../assets/Weather-partlycloudy.svg";
import partlyCloudyNight from "../assets/Weather-partlycloudynight.svg";
import snowy from "../assets/Weather-snow.svg";
import storm from "../assets/Weather-storm.svg";
import thunderStorm from "../assets/Weather-thunder.svg";
import windy from "../assets/Weather-windy.svg";
import cloudy from "../assets/Cloudy.svg";
function MainWeatherInfo() {
  const {
    curWeather,
    curWeatherCondition,
    curWeatherConditionCode,
    curContry,
    curCity,
    curLocalTime,
    curDate,
    isDay,
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
  return (
    <section className={styles.mainWeather}>
      <div className={styles.leftSide}>
        <img className={styles.weatherImage} src={weather} alt="WeatherType" />
        <h2>
          {curContry} - {curCity}
        </h2>
      </div>
    </section>
  );
}

export default MainWeatherInfo;
