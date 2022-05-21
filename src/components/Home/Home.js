import commonStyles from "../../common/styles/CommonStyles.module.scss";
import styles from "./Home.module.scss";
import photo from "../../assets/images/photo.jpg";

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
          <img src={photo} alt={"Alex Brilevski"}/>
        </div>
      </div>
    </div>
  );
};