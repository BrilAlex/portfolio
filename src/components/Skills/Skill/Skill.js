import styles from "./Skill.module.css";

export const Skill = (props) => {
  const {title, icon, description} = props;

  const iconStyle = `${styles.icon}${icon ? " " + styles[icon] : ""}`;

  return (
    <div className={styles.skill}>
      <div className={iconStyle}/>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <p className={styles.description}>
        {description}
      </p>
    </div>
  );
};