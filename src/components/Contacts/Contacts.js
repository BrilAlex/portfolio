import commonStyles from "../../common/styles/CommonStyles.module.css";
import styles from "./Contacts.module.css";
import {SectionTitle} from "../../common/components/SectionTitle/SectionTitle";
import {ContactForm} from "../../common/components/ContactForm/ContactForm";

export const Contacts = () => {
  return (
    <div className={commonStyles.section}>
      <div className={`${commonStyles.container}`}>
        <SectionTitle title={"Contacts"}/>
        <div className={styles.formContainer}>
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};
