import s from "./Home.module.scss";
import photo from "../../assets/images/photo.jpg";
import Fade from "react-reveal/Fade";

export const Home = () => {
  const sectionClassName = `${s.home} darkOverlay`;

  return (
    <div id={"home"} className={sectionClassName}>
      <div className={s.container}>
        <Fade left>
          <div className={s.greetingText}>
            <p>Hello & Welcome!</p>
            <h1>I am Alex Brilevski</h1>
            <h4>A front-end developer.</h4>
          </div>
        </Fade>
        <Fade right>
          <div className={s.mainPhoto}>
            <img src={photo} alt={"Alex Brilevski"}/>
          </div>
        </Fade>
      </div>
    </div>
  );
};
