import s from "./SectionTitle.module.scss";
import Fade from "react-reveal/Fade";

export const SectionTitle = ({title, subtitle = "Some text"}) => {
  return (
    <Fade bottom>
      <div className={s.sectionTitle}>
        <h2>{title}</h2>
        <p className={s.subtitle}>
          {subtitle}
          <span className={s.headingSeparator}/>
        </p>
      </div>
    </Fade>
  );
};
