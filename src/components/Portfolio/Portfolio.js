import commonStyles from "../../common/styles/CommonStyles.module.css";
import styles from "./Portfolio.module.css";
import {Project} from "./Project/Project";
import {SectionTitle} from "../../common/components/SectionTitle/SectionTitle";
import todoListImage from "../../assets/images/todolist.jpg";
import socialNetImage from "../../assets/images/social-net.jpg";
import counter from "../../assets/images/counter.jpg";
import studyCards from "../../assets/images/study-cards.jpg";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "To-do list",
      preViewImage: todoListImage,
      gitHubPagesURL: "",
      description: "Project TodoList description"
    },
    {
      id: 2,
      title: "Social network",
      preViewImage: socialNetImage,
      gitHubPagesURL: "",
      description: "Project SocialNet description"
    },
    {
      id: 3,
      title: "Counter",
      preViewImage: counter,
      gitHubPagesURL: "",
      description: "Project Counter description"
    },
    {
      id: 4,
      title: "Friday project",
      preViewImage: studyCards,
      gitHubPagesURL: "",
      description: "Project Study cards description"
    },
  ];

  return (
    <div className={commonStyles.section}>
      <div className={`${commonStyles.container}`}>
        <SectionTitle title={"Portfolio"}/>
        <div className={styles.projectsList}>
          {
            projects.map(p =>
              <Project
                key={p.id}
                title={p.title}
                preViewImage={p.preViewImage}
                gitHubPagesURL={p.gitHubPagesURL}
                description={p.description}
              />
            )
          }
        </div>
      </div>
    </div>
  );
};