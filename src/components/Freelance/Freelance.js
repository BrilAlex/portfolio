import commonStyles from "../../common/styles/CommonStyles.module.scss";
import styles from "./Freelance.module.css";
import {Button} from "../../common/components/Button/Button";

export const Freelance = () => {
  return (
    <div className={`${styles.freelance} ${commonStyles.section} ${commonStyles.darkOverlay}`}>
      <div className={`${commonStyles.container}`}>
        <div>
          <h2>I am opened for remote work proposals</h2>
        </div>
        <Button text={"Hire Me!"} color={"secondary"} outlined={true}/>
      </div>
    </div>
  );
};