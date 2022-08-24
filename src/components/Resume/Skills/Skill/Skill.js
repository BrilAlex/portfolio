import s from "./Skill.module.scss";
import {Progress} from "./Progress/Progress";

export const Skill = (props) => {
  const {title, icon, progress} = props;

  const iconStyle = `${s.icon}${icon ? " " + s[icon] : ""}`;

  return (
    <div className={s.skill}>
      <div className={s.description}>
        <div className={s.title}>
          <div className={s.iconBox}>
            <div className={iconStyle}/>
          </div>
          <h3>{title}</h3>
        </div>
        <div className={s.progress}>
          {progress}%
        </div>
      </div>
      <Progress progress={progress}/>
    </div>
  );
};
