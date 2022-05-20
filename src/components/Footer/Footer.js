import commonStyles from "../../common/styles/CommonStyles.module.css";
import styles from "./Footer.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${commonStyles.container} ${styles.container}`}>
        <div className={styles.socialContacts}>
          <a className={styles.socialIcon} href={"#icon1"} title={"Icon 1"}>
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a className={styles.socialIcon} href={"#icon2"} title={"Icon 1"}>
            <FontAwesomeIcon icon={faLinkedinIn}/>
          </a>
        </div>
        <div className={styles.copyright}>
          {year} &copy; Alex Brilevski. All rights reserved
        </div>
      </div>
    </footer>
  );
};