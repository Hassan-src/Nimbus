import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className={styles.loader}>
      <span className={styles.loaderPoint}></span>
      <span className={styles.loaderPoint}></span>
      <span className={styles.loaderPoint}></span>
    </div>
  );
}

export default Loader;
