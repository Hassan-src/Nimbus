import styles from "./MainWeatherInfo.module.css";
import DetailedInfo from "./DetailedInfo";
import TodayDetails from "./TodayDetails";
import ComingForecast from "./ComingForecast";

function MainWeatherInfo() {
  return (
    <section className={styles.mainWeather}>
      <TodayDetails />
      <DetailedInfo />
      <ComingForecast />
    </section>
  );
}

export default MainWeatherInfo;
