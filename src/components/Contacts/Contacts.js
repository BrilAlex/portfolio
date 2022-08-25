import s from "./Contacts.module.scss";
import {SectionTitle} from "../../common/components/SectionTitle/SectionTitle";
import {ContactForm} from "./ContactForm/ContactForm";
import Fade from "react-reveal/Fade";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faTelegram} from "@fortawesome/free-brands-svg-icons";

export const Contacts = () => {
  return (
    <section id={"contacts"}>
      <div className={"container"}>
        <SectionTitle title={"Contact"} subtitle={"Get in touch"}/>
        <Fade bottom>
          <div className={s.contactsContent}>
            <div className={s.contactsList}>
              <h4>Contacts</h4>
              <ul>
                <li>+375 29 617-20-37</li>
                <li>brilevski.alex@gmail.com</li>
              </ul>
              <h4>Follow me</h4>
              <div className={s.socialContacts}>
                <a className={s.socialIcon} href={"https://t.me/AlexBrilevski"} title={"My Telegram"}>
                  <FontAwesomeIcon icon={faTelegram} className={s.iconWithBg}/>
                </a>
                <a className={s.socialIcon} href={"https://github.com/BrilAlex"} title={"My profile on GitHub"}>
                  <FontAwesomeIcon icon={faGithub} className={s.iconWithBg}/>
                </a>
                <a className={s.socialIcon} href={"https://www.linkedin.com/in/alexei-brilevski"} title={"My Linkedin profile"}>
                  <FontAwesomeIcon icon={faLinkedinIn} className={s.icon}/>
                </a>
              </div>
            </div>
            <div className={s.formContainer}>
              <ContactForm/>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};
