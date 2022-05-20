import styles from "./ContactForm.module.css";
import {Button} from "../Button/Button";

export const ContactForm = () => {
  return (
    <form className={styles.form}>
      <input className={styles.formField} placeholder={"Your name"}/>
      <input className={styles.formField} placeholder={"Your phone"}/>
      <textarea className={styles.formField} placeholder={"Your message"}/>
      <Button text={"Send"}/>
    </form>
  );
};