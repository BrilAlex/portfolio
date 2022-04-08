import commonStyles from "./../../assets/css/CommonStyles.module.css";
import styles from "./RemoteWork.module.css";

export const RemoteWork = () => {
  return (
    <div className={styles.remoteWork}>
      <div className={`${commonStyles.container} ${styles.container}`}>
        <div className={commonStyles.blockTitle}>
          <h2>I am opened for remote work proposals</h2>
        </div>
        <button className={commonStyles.button}>Hire me</button>
      </div>
    </div>
  );
};