import s from "./Freelance.module.css";
import Fade from "react-reveal/Fade";
import {LinkButton} from "../../common/components/LinkButton/LinkButton";

export const Freelance = () => {
  const sectionClassName = `${s.freelance} darkOverlay`;

  return (
    <div id={"freelance"} className={sectionClassName}>
      <div className={"container"}>
        <Fade bottom>
          <div>
            <h2>I am opened for remote work proposals</h2>
          </div>
          <LinkButton url={"#contacts"} color={"secondary"} outlined={true}>
            Hire Me!
          </LinkButton>
        </Fade>
      </div>
    </div>
  );
};
