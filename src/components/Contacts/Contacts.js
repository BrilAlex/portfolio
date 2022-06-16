import s from "./Contacts.module.css";
import {SectionTitle} from "../../common/components/SectionTitle/SectionTitle";
import {ContactForm} from "./ContactForm/ContactForm";
import Fade from "react-reveal/Fade";

export const Contacts = () => {
  return (
    <div id={"contacts"}>
      <div className={"container"}>
        <SectionTitle title={"Contacts"}/>
        <Fade bottom>
          <div className={s.formContainer}>
            <ContactForm/>
          </div>
        </Fade>
      </div>
    </div>
  );
};
