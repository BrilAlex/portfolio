import s from "./Footer.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faViber} from '@fortawesome/free-brands-svg-icons';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id={"footer"} className={s.footer}>
      <div className={s.container}>
        <div className={s.socialContacts}>
          <a className={s.socialIcon} href={"#icon2"} title={"Icon 1"}>
            <FontAwesomeIcon icon={faViber} className={s.icon}/>
          </a>
          <a className={s.socialIcon} href={"#icon2"} title={"Icon 1"}>
            <FontAwesomeIcon icon={faTelegram} className={s.iconWithBg}/>
          </a>
          <a className={s.socialIcon} href={"https://github.com/BrilAlex"} title={"Icon 1"}>
            <FontAwesomeIcon icon={faGithub} className={s.iconWithBg}/>
          </a>
          <a className={s.socialIcon} href={"#icon2"} title={"Icon 1"}>
            <FontAwesomeIcon icon={faLinkedinIn} className={s.icon}/>
          </a>
        </div>
        <div className={s.copyright}>
          {year} &copy; Alex Brilevski. All rights reserved
        </div>
      </div>
    </footer>
  );
};
