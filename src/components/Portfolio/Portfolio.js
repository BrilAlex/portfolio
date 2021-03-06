import s from "./Portfolio.module.css";
import {Project} from "./Project/Project";
import {SectionTitle} from "../../common/components/SectionTitle/SectionTitle";
import todoListImage from "../../assets/images/todolist.jpg";
import socialNetImage from "../../assets/images/social-net.jpg";
import counter from "../../assets/images/counter.jpg";
import studyCards from "../../assets/images/study-cards.jpg";
import Fade from "react-reveal/Fade";

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
    <div id={"portfolio"}>
      <div className={"container"}>
        <SectionTitle title={"Portfolio"}/>
        <Fade bottom>
          <div className={s.projectsList}>
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
        </Fade>
      </div>
    </div>
  );
};
