import commonStyles from "./../../assets/css/CommonStyles.module.css";
import styles from "./MainBanner.module.css";

export const MainBanner = () => {
  return (
    <div className={styles.mainBanner}>
      <div className={`${commonStyles.container} ${styles.container}`}>
        <div className={styles.greetingText}>
          <p>Hi there!</p>
          <h1>My name is Alex Brilevski</h1>
          <p>I am a front-end developer.</p>
        </div>
        <div className={styles.mainPhoto}>
          <img src={""} alt={"Alex Brilevski"}/>
        </div>
      </div>
    </div>
  );
};