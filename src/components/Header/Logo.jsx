import useWeatherPost from "../../context/useWeatherPost";
import styles from "./Logo.module.css";
function Logo() {
  const { openSearch } = useWeatherPost();
  return (
    <>
      {!openSearch && (
        <div className={styles.logo}>
          <h1>Nimbus</h1>
        </div>
      )}
    </>
  );
}

export default Logo;
