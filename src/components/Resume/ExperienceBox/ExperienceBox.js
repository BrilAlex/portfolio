import s from "./ExperienceBox.module.scss";

export const ExperienceBox = ({startYear, finishYear, title, subtitle, description}) => {
  return (
    <div className={s.experienceBox}>
      <div className={s.period}>{startYear} - {finishYear}</div>
      <div className={s.details}>
        <h4>{title}</h4>
        {subtitle && <p className={s.subtitle}>{subtitle}</p>}
        <p className={s.description}>
          {description}
        </p>
      </div>
    </div>
  );
};
