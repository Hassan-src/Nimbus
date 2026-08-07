import useWeatherPost from "../../context/useWeatherPost";
import styles from "./DetailedInfo.module.css";

import sunSet from "../../assets/Sunset.svg";
import sunRise from "../../assets/Sunrise.svg";
import rain from "../../assets/Rain.svg";
import droplet from "../../assets/Droplet.svg";
import wind from "../../assets/Wind.svg";

function DetailedInfo() {
  const {
    curChanceRain,
    curWindSpeed,
    curHumidity,
    todaySunRise,
    todaySunSet,
  } = useWeatherPost();
  return (
    <div className={styles.rightSide}>
      <ul className={styles.infoList}>
        <li className={styles.weatherDetails}>
          <img className={styles.detailsImage} src={droplet} alt="" />
          <div className={styles.weatherDetailsText}>
            <span className={styles.title}>Humidity:</span>
            <span className={styles.info}>{curHumidity}%</span>
          </div>
        </li>
        <li className={styles.weatherDetails}>
          <img className={styles.detailsImage} src={rain} alt="" />
          <div className={styles.weatherDetailsText}>
            <span className={styles.title}>precipitation:</span>
            <span className={styles.info}>{curChanceRain}%</span>
          </div>
        </li>
        <li className={styles.weatherDetails}>
          <img className={styles.detailsImage} src={wind} alt="" />
          <div className={styles.weatherDetailsText}>
            <span className={styles.title}>Wind speed:</span>
            <span className={styles.info}>{curWindSpeed}MPH</span>
          </div>
        </li>
        <li className={styles.weatherDetails}>
          <img className={styles.detailsImage} src={sunRise} alt="" />
          <div className={styles.weatherDetailsText}>
            <span className={styles.title}>Sunrise:</span>
            <span className={styles.info}>{todaySunRise}</span>
          </div>
        </li>
        <li className={styles.weatherDetails}>
          <img className={styles.detailsImage} src={sunSet} alt="" />
          <div className={styles.weatherDetailsText}>
            <span className={styles.title}>Sunset:</span>
            <span className={styles.info}>{todaySunSet}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DetailedInfo;
