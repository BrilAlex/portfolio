import s from "./ContactForm.module.css";
import {Button} from "../../../common/components/Button/Button";

export const ContactForm = () => {
  return (
    <form className={s.form}>
      <input className={s.formField} placeholder={"Your name"}/>
      <input className={s.formField} placeholder={"Your phone"}/>
      <textarea className={s.formField} placeholder={"Your message"}/>
      <Button text={"Send"}/>
    </form>
  );
};
