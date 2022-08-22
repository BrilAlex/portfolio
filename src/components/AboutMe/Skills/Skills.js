import s from "./Skills.module.css";
import {Skill} from "./Skill/Skill";
import Fade from "react-reveal/Fade";

export const Skills = () => {
  const skills = [
    {id: 1, title: "HTML", icon: "html5", progress: 90},
    {id: 2, title: "CSS", icon: "css3", progress: 85},
    {id: 3, title: "JavaScript", icon: "js", progress: 75},
    {id: 4, title: "React", icon: "react", progress: 70},
    {id: 5, title: "Redux", icon: "redux", progress: 70},
  ];

  return (
    <div id={"skills"}>
      <div className={s.blockTitle}><h3>My Skills</h3></div>
      <Fade bottom>
        <div className={s.skillsList}>
          {
            skills.map(s =>
              <Skill
                key={s.id}
                title={s.title}
                icon={s.icon}
                progress={s.progress}
              />
            )
          }
        </div>
      </Fade>
    </div>
  );
};
