import useWeatherPost from "../../context/useWeatherPost";
import styles from "./ComingForcast.module.css";
import sunny from "../../assets/Weather-sunny.svg";
import mist from "../../assets/Weather-mist.svg";
import partlyCloudy from "../../assets/Weather-partlycloudy.svg";
import snowy from "../../assets/Weather-snow.svg";
import storm from "../../assets/Weather-storm.svg";
import thunderStorm from "../../assets/Weather-thunder.svg";
import cloudy from "../../assets/Weather-cloudy.svg";
import Loader from "../Loader/Loader";
function ComingForcast() {
  const { futureData, curDate, futureDataLoading, futureDataError } =
    useWeatherPost();
  if (!futureData) return;
  function getWeatherCon(code) {
    if (code === 1000) return sunny;
    if (code === 1003) return partlyCloudy;
    if ([1006, 1009].includes(code)) return cloudy;
    if ([1030, 1135, 1147].includes(code)) return mist;
    if (code >= 1063 && code <= 1201) return storm;
    if (code >= 1210 && code <= 1264) return snowy;
    if (code >= 1273) return thunderStorm;
  }
  if (futureDataLoading) return <Loader />;
  if (futureDataError) return;
  return (
    <div className={styles.upComing}>
      <ul className={styles.forcastList}>
        {futureData.forecastday.map((data) => (
          <li className={styles.forcast} key={data.date}>
            <p className={styles.forcastDay}>
              {curDate === data.date
                ? "Today"
                : new Date(data.date).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
            </p>
            <span className={styles.forcastDate}>{data.date}</span>
            <img
              className={styles.forcastImage}
              src={getWeatherCon(data.day.condition.code)}
              alt=""
              loading="lazy"
            />
            <span className={styles.highTemp}>
              {Math.round(data.day.maxtemp_c)}°
              <span className={styles.lowTemp}>
                {Math.round(data.day.mintemp_c)}°
              </span>
            </span>
            <p className={styles.weatherCondition}>{data.day.condition.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComingForcast;
