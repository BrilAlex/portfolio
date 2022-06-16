import s from "./Skill.module.scss";

export const Skill = (props) => {
  const {title, icon, description} = props;

  const iconStyle = `${s.icon}${icon ? " " + s[icon] : ""}`;

  return (
    <div className={s.skill}>
      <div className={s.iconBox}>
        <div className={iconStyle}/>
      </div>
      <div className={s.skillContent}>
        <h3>{title}</h3>
        <p className={s.description}>
          {description}
        </p>
      </div>
    </div>
  );
};
