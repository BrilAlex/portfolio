import commonStyles from "../../common/styles/CommonStyles.module.css";
import styles from "./Skills.module.css";
import {Skill} from "./Skill/Skill";
import {SectionTitle} from "../../common/components/SectionTitle/SectionTitle";

export const Skills = () => {
  const skills = [
    {id: 1, title: "HTML", icon: "", description: "HTML skill description"},
    {id: 2, title: "CSS", icon: "", description: "CSS skill description"},
    {id: 3, title: "JavaScript", icon: "", description: "JavaScript skill description"},
    {id: 4, title: "React", icon: "", description: "React skill description"},
    {id: 5, title: "Redux", icon: "", description: "Redux skill description"},
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
