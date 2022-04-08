import commonStyles from "./../../assets/css/CommonStyles.module.css";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${commonStyles.container} ${styles.container}`}>
        <div className={commonStyles.blockTitle}>
          <h2>Alex Brilevski</h2>
        </div>
        <div className={styles.socialContactsList}>
          <a className={styles.socialContact} href={"#icon1"} title={"Icon 1"}>Icon</a>
          <a className={styles.socialContact} href={"#icon2"} title={"Icon 1"}>Icon</a>
          <a className={styles.socialContact} href={"#icon3"} title={"Icon 1"}>Icon</a>
          <a className={styles.socialContact} href={"#icon4"} title={"Icon 1"}>Icon</a>
        </div>
        <div className={styles.copyright}>
          &copy; 2021 All rights reserved
        </div>
      </div>
    </footer>
  );
};