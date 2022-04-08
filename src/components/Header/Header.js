import commonStyles from "./../../assets/css/CommonStyles.module.css";
import styles from "./Header.module.css";
import {NavBar} from "./NavBar/NavBar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${commonStyles.container} ${styles.container}`}>
        <NavBar/>
      </div>
    </header>
  );
};