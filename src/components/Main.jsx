import styles from "./Main.module.css";

import cloudy from "../assets/cloudy-bg.avif";
import partlyCloudyNight from "../assets/partlyCloudyNight.avif";
import sunny from "../assets/sunny-bg.avif";
import thunderStorm from "../assets/thunder-bg.avif";
import mist from "../assets/mist-bg.avif";
import rainy from "../assets/rainy-bg.avif";
import snowy from "../assets/snowy-bg.avif";
import night from "../assets/night-bg.avif";
import useWeatherPost from "../context/useWeatherPost";

function Main({ children }) {
  const { curWeatherConditionCode, isDay } = useWeatherPost();
  function getWeatherBg(code, isDay) {
    if (code === 1000) return isDay ? sunny : night;
    if (code === 1003) return isDay ? cloudy : partlyCloudyNight;
    if ([1006, 1009].includes(code)) return cloudy;
    if ([1030, 1135, 1147].includes(code)) return mist;
    if (code >= 1063 && code <= 1201) return rainy;
    if (code >= 1210 && code <= 1264) return snowy;
    if (code >= 1273) return thunderStorm;
  }
  const weatherBackground = getWeatherBg(curWeatherConditionCode, isDay);
  return (
    <main className={styles.main}>
      <img className={styles.bg} src={weatherBackground} alt="weather" />
      {children}
    </main>
  );
}

export default Main;
