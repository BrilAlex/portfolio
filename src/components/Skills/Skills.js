import commonStyles from "./../../assets/css/CommonStyles.module.css";
import styles from "./Skills.module.css";
import {Skill} from "./Skill/Skill";

export const Skills = () => {
  const skills = [
    {id: 1, title: "HTML", icon: "", description: "Skill 1 description"},
    {id: 2, title: "CSS", icon: "", description: "Skill 2 description"},
    {id: 3, title: "JavaScript", icon: "", description: "Skill 3 description"},
  ];

  return (
    <div className={styles.skills}>
      <div className={`${commonStyles.container}`}>
        <div className={commonStyles.blockTitle}>
          <h2>My Skills</h2>
        </div>
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