import s from "./Freelance.module.css";
import {Button} from "../../common/components/Button/Button";
import Fade from "react-reveal/Fade";

export const Freelance = () => {
  const sectionClassName = `${s.freelance} darkOverlay`;

  return (
    <div id={"freelance"} className={sectionClassName}>
      <div className={"container"}>
        <Fade bottom>
          <div>
            <h2>I am opened for remote work proposals</h2>
          </div>
          <Button text={"Hire Me!"} color={"secondary"} outlined={true}/>
        </Fade>
      </div>
    </div>
  );
};
