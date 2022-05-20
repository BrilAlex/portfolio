import commonStyles from "../../common/styles/CommonStyles.module.css";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={`${styles.home} ${commonStyles.section} ${commonStyles.darkOverlay}`}>
      <div className={`${commonStyles.container} ${styles.container}`}>
        <div className={styles.greetingText}>
          <h4>Hello & Welcome!</h4>
          <h1>I am Alex Brilevski</h1>
          <p>A front-end developer.</p>
        </div>
        <div className={styles.mainPhoto}>
          <img src={""} alt={"Alex Brilevski"}/>
        </div>
      </div>
    </div>
  );
};