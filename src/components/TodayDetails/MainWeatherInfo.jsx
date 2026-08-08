import styles from "./MainWeatherInfo.module.css";
import DetailedInfo from "./DetailedInfo";
import TodayDetails from "./TodayDetails";
import ComingForcast from "./ComingForcast";

function MainWeatherInfo() {
  return (
    <section className={styles.mainWeather}>
      <TodayDetails />
      <DetailedInfo />
      <ComingForcast />
    </section>
  );
}

export default MainWeatherInfo;
