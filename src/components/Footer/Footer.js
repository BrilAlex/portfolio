import commonStyles from "../../common/styles/CommonStyles.module.css";
import styles from "./Footer.module.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${commonStyles.container} ${styles.container}`}>
        <div className={styles.socialContacts}>
          <a className={styles.socialIcon} href={"#icon1"} title={"Icon 1"}>Icon</a>
          <a className={styles.socialIcon} href={"#icon2"} title={"Icon 1"}>Icon</a>
          <a className={styles.socialIcon} href={"#icon3"} title={"Icon 1"}>Icon</a>
          <a className={styles.socialIcon} href={"#icon4"} title={"Icon 1"}>Icon</a>
        </div>
        <div className={styles.copyright}>
          {year} &copy; Alex Brilevski. All rights reserved
        </div>
      </div>
    </footer>
  );
};