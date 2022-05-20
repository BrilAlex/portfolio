import commonStyles from "../../common/styles/CommonStyles.module.css";
import styles from "./Freelance.module.css";

export const Freelance = () => {
  return (
    <div className={`${styles.freelance} ${commonStyles.section} ${commonStyles.darkOverlay}`}>
      <div className={`${commonStyles.container} ${styles.container}`}>
        <div>
          <h2>I am opened for remote work proposals</h2>
        </div>
        <button className={`${commonStyles.button} ${commonStyles.outlined}`}>Hire Me!</button>
      </div>
    </div>
  );
};