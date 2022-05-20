import commonStyles from "../../common/styles/CommonStyles.module.css";
import styles from "./Contacts.module.css";
import {SectionTitle} from "../../common/components/SectionTitle/SectionTitle";

export const Contacts = () => {
  return (
    <div className={commonStyles.section}>
      <div className={`${commonStyles.container}`}>
        <SectionTitle title={"Contacts"}/>
        <div className={styles.formContainer}>
          <form className={commonStyles.form}>
            <input className={commonStyles.formField} placeholder={"Your name"}/>
            <input className={commonStyles.formField} placeholder={"Your phone"}/>
            <textarea className={commonStyles.formField} placeholder={"Your message"}/>
            <input className={commonStyles.button} type={"submit"} value={"Send"}/>
          </form>
        </div>
      </div>
    </div>
  );
};