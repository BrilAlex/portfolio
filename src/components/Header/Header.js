import commonStyles from "../../common/styles/CommonStyles.module.scss";
import styles from "./Header.module.css";
import {Navbar} from "./Navbar/Navbar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${commonStyles.container} ${styles.container}`}>
        <Navbar/>
      </nav>
    </header>
  );
};