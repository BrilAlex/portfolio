import s from "./ExperienceBox.module.scss";

export const ExperienceBox = ({startYear, finishYear, title, description}) => {
  return (
    <div className={s.experienceBox}>
      <div className={s.period}>{startYear} - {finishYear}</div>
      <div className={s.details}>
        <h4>{title}</h4>
        <p className={s.description}>
          {description}
        </p>
      </div>
    </div>
  );
};
