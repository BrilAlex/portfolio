import commonStyles from "./../../assets/css/CommonStyles.module.css";
import styles from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={`${commonStyles.container}`}>
        <div className={commonStyles.blockTitle}>
          <h2>Contacts</h2>
        </div>
        <div className={styles.formContainer}>
          <form className={commonStyles.form}>
            <input className={commonStyles.textField} placeholder={"Enter Your name"}/>
            <input className={commonStyles.textField} placeholder={"Enter Your phone"}/>
            <textarea className={commonStyles.textArea} placeholder={"Enter Your message"}/>
            <input className={commonStyles.button} type={"submit"} value={"Send"}/>
          </form>
        </div>
      </div>
    </div>
  );
};