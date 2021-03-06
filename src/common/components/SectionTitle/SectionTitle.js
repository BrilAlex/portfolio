import s from "./SectionTitle.module.scss";
import Fade from "react-reveal/Fade";

export const SectionTitle = (props) => {
  return (
    <Fade bottom>
      <div className={s.sectionTitle}>
        <h2>{props.title}</h2>
        {props.subtitle && <p>{props.subtitle}</p>}
        <span className={s.sBorder}/>
      </div>
    </Fade>
  );
};
