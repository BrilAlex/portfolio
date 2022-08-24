import {SectionTitle} from "../../common/components/SectionTitle/SectionTitle";
import {LinkButton} from "../../common/components/LinkButton/LinkButton";
import s from "./AboutMe.module.css";

export const AboutMe = () => {
  return (
    <div id={"about"}>
      <div className={"container"}>
        <SectionTitle title={"About me"}/>
        <div className={s.aboutContent}>
          <div className={s.aboutText}>
            <p>
              Qualified and professional front-end developer with experience in creating SPA using
              React (JS/TS), Redux, HTML and CSS.
            </p>
            <p>
              Now I am improving my skills in this direction and expanding them with new
              technologies.
              Planning to study Node.js, because in future I see myself as a Full-stack developer.
            </p>
            <p>
              My free time is dedicated to Codewars, programming tutorials and boosting my English.
            </p>
            <p>
              Ready to consider a project work and full-time employment in a creative company with
              up-to-date tasks and collaborative team.
            </p>
            <p>Open to your suggestions.</p>
          </div>
          <div className={s.aboutContacts}>
            <ul>
              <li><b>Name</b>: Brilevski Alexei</li>
              <li><b>Phone</b>: +375 29 617-20-37</li>
              <li><b>Email</b>: brilevski.alex@gmail.com</li>
              <li><b>From</b>: Minsk, Belarus</li>
            </ul>
            <LinkButton>Download CV</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};
