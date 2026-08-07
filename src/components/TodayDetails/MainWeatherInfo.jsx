import styles from "./MainWeatherInfo.module.css";
import DetailedInfo from "./DetailedInfo";
import TodayDetails from "./TodayDetails";

function MainWeatherInfo() {
  return (
    <section className={styles.mainWeather}>
      <TodayDetails />
      <DetailedInfo />
    </section>
  );
}

export default MainWeatherInfo;
