import styles from "./Skill.module.css";

export const Skill = (props) => {
  const {title, icon, description} = props;

  const iconStyle = `${styles.icon}${icon ? " " + styles[icon] : ""}`;

  return (
    <div className={styles.skill}>
      <div className={styles.iconBox}>
        <div className={iconStyle}/>
      </div>
      <div className={styles.skillContent}>
        <h3>{title}</h3>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
};
