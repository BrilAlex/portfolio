import s from "./Portfolio.module.css";
import {Project} from "./Project/Project";
import {SectionTitle} from "../../common/components/SectionTitle/SectionTitle";
import todoListImage from "../../assets/images/todolist.png";
import socialNetImage from "../../assets/images/social-net.png";
import counter from "../../assets/images/counter.png";
import studyCards from "../../assets/images/study-cards.png";
import chess from "../../assets/images/chess.png";
import Fade from "react-reveal/Fade";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Study cards",
      previewImage: studyCards,
      sourceCodeURL: "https://github.com/BrilAlex/study-cards",
      gitHubPagesURL: "https://brilalex.github.io/study-cards",
      stack: "TypeScript, React, Redux, Redux-Thunk, React-Router-dom, Axios, Formik. Team development.",
      description: "Start-up project",
      period: "Mar. 2022 - July 2022",
    },
    {
      id: 2,
      title: "To-do list",
      previewImage: todoListImage,
      sourceCodeURL: "https://github.com/BrilAlex/todo-list",
      gitHubPagesURL: "https://brilalex.github.io/todo-list",
      stack: "TypeScript, React, Redux, Redux Toolkit, Redux-Thunk, React-Router-dom, Axios, Formik, TDD, Material UI, Storybook.",
      description: "Educational project",
      period: "Feb. 2022 - Mar. 2022",
    },
    {
      id: 3,
      title: "Social network",
      previewImage: socialNetImage,
      sourceCodeURL: "https://github.com/BrilAlex/social-net",
      gitHubPagesURL: "https://brilalex.github.io/social-net",
      stack: "TypeScript, React, Redux, Redux-Thunk, React-Router-dom, Axios, Redux-Form, Reselect, TDD.",
      description: "Self-education project",
      period: "Mar. 2022 - May 2022",
    },
    {
      id: 4,
      title: "Counter",
      previewImage: counter,
      sourceCodeURL: "https://github.com/BrilAlex/counter",
      gitHubPagesURL: "https://brilalex.github.io/counter",
      stack: "TypeScript, React, Redux, Redux-Thunk.",
      description: "Educational project",
      period: "Mar. 2022",
    },
    {
      id: 5,
      title: "Chess",
      previewImage: chess,
      sourceCodeURL: "https://github.com/BrilAlex/react-chess",
      gitHubPagesURL: "https://brilalex.github.io/react-chess",
      stack: "TypeScript, React",
      description: "Pet project",
      period: "Sep. 2022",
    },
  ];

  return (
    <section id={"portfolio"}>
      <div className={"container"}>
        <SectionTitle title={"Portfolio"} subtitle={"My Projects"}/>
        <Fade bottom>
          <div className={s.projectsList}>
            {projects.map(p => <Project key={p.id} project={p}/>)}
          </div>
        </Fade>
      </div>
    </section>
  );
};
