import styles from "./Navigation.module.css";
import Button from "../Button/Button";

const Navigation = () => {
  return (
    <nav className={`${styles.navbar} container`}>
      <div className={styles.logo}>
        <img src="/images/CompanyLogo.png" alt="Headerlogo" />
      </div>
      <ul>
        <li>
          <a href="#home" className={styles.nav_link}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={styles.nav_link}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" className={styles.nav_link}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
