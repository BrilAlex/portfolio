import {SectionTitle} from "../../common/components/SectionTitle/SectionTitle";
import {Skills} from "./Skills/Skills";

export const AboutMe = () => {
  return (
    <div id={"about"}>
      <div className={"container"}>
        <SectionTitle
          title={"About me"}
          subtitle={"I love what I do. I take great pride in what I do."}
        />
        <p>
          Qualified and professional front-end developer with experience in creating SPA using
          React (JS/TS), Redux, HTML and CSS.
        </p>
        <p>
          Now I am improving my skills in this direction and expanding them with new technologies.
          Planning to study Node.js, because in future I see myself as a Full-stack developer.
        </p>
        <p>My free time is dedicated to Codewars, programming tutorials and boosting my English.</p>
        <p>
          Ready to consider a project work and full-time employment in a creative company with
          up-to-date tasks and collaborative team.
        </p>
        <p>Open to your suggestions.</p>
        <Skills/>
      </div>
    </div>
  );
};