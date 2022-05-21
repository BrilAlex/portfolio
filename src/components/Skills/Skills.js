import commonStyles from "../../common/styles/CommonStyles.module.scss";
import styles from "./Skills.module.css";
import {Skill} from "./Skill/Skill";
import {SectionTitle} from "../../common/components/SectionTitle/SectionTitle";

export const Skills = () => {
  const skills = [
    {id: 1, title: "HTML", icon: "html5", description: "HTML skill description"},
    {id: 2, title: "CSS", icon: "css3", description: "CSS skill description"},
    {id: 3, title: "JavaScript", icon: "js", description: "JavaScript skill description"},
    {id: 4, title: "React", icon: "react", description: "React skill description"},
    {id: 5, title: "Redux", icon: "redux", description: "Redux skill description"},
  ];

  return (
    <div className={commonStyles.section}>
      <div className={`${commonStyles.container}`}>
        <SectionTitle title={"My Skills"} subtitle={"Some text"}/>
        <div className={styles.skillsList}>
          {
            skills.map(s =>
              <Skill
                key={s.id}
                title={s.title}
                icon={s.icon}
                description={s.description}
              />
            )
          }
        </div>
      </div>
    </div>
  );
};
