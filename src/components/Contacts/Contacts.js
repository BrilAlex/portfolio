import s from "./Contacts.module.scss";
import {SectionTitle} from "../../common/components/SectionTitle/SectionTitle";
import {ContactForm} from "./ContactForm/ContactForm";
import Fade from "react-reveal/Fade";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";

export const Contacts = () => {
  return (
    <section id={"contacts"}>
      <div className={"container"}>
        <SectionTitle title={"Contact"} subtitle={"Get in touch"}/>
        <Fade bottom>
          <div className={s.contactsContent}>
            <div className={s.contactsList}>
              <h4>Contacts</h4>
              <p>
                <span className={s.icon}>
                  <FontAwesomeIcon icon={faPhone}/>
                </span>
                <a href={"tel:+375296172037"}>+375 29 617-20-37</a>
              </p>
              <p>
                <span className={s.icon}>
                  <FontAwesomeIcon icon={faEnvelope}/>
                </span>
                <a href={"mailto:brilevski.alex@gmail.com"}>brilevski.alex@gmail.com</a>
              </p>
              <h4>Follow me</h4>
              <div className={s.socialContacts}>
                <a
                  className={`${s.socialIcon} ${s.muted}`}
                  href={"https://t.me/AlexBrilevski"}
                  title={"My Telegram"}
                >
                  <FontAwesomeIcon icon={faTelegram} className={s.icon}/>
                </a>
                <a
                  className={`${s.socialIcon} ${s.muted}`}
                  href={"https://github.com/BrilAlex"}
                  title={"My profile on GitHub"}
                >
                  <FontAwesomeIcon icon={faGithub} className={s.icon}/>
                </a>
                <a
                  className={`${s.socialIcon} ${s.muted}`}
                  href={"https://www.linkedin.com/in/alexei-brilevski"}
                  title={"My Linkedin profile"}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className={s.icon}/>
                </a>
              </div>
            </div>
            <div className={s.formContainer}>
              <h4>Send me a note</h4>
              <ContactForm/>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};
