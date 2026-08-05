import styles from "./Logo.module.css";
import logo from "../assets/Logo.avif";
function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Logo" />
      <h1>Nimbus</h1>
    </div>
  );
}

export default Logo;
