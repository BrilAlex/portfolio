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
      gitHubSourceCode: "https://github.com/BrilAlex/todo-list",
      gitHubPagesURL: "https://brilalex.github.io/todo-list",
      description: "Stack: TypeScript, React, Redux, Redux Toolkit, Redux-Thunk, React-Router-dom, Axios, Formik, TDD, Material UI, Storybook."
    },
    {
      id: 2,
      title: "Social network",
      preViewImage: socialNetImage,
      gitHubSourceCode: "https://github.com/BrilAlex/social-net",
      gitHubPagesURL: "https://brilalex.github.io/social-net",
      description: "Stack: TypeScript, React, Redux, Redux-Thunk, React-Router-dom, Axios, Redux-Form, Reselect, TDD."
    },
    {
      id: 3,
      title: "Counter",
      preViewImage: counter,
      gitHubSourceCode: "https://github.com/BrilAlex/counter",
      gitHubPagesURL: "https://brilalex.github.io/counter",
      description: "Stack: TypeScript, React, Redux, Redux-Thunk."
    },
    {
      id: 4,
      title: "Study cards",
      preViewImage: studyCards,
      gitHubSourceCode: "https://github.com/BrilAlex/study-cards",
      gitHubPagesURL: "https://brilalex.github.io/study-cards",
      description: "Stack: TypeScript, React, Redux, Redux-Thunk, React-Router-dom, Axios, Formik. Team development."
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
                  gitHubSourceCode={p.gitHubSourceCode}
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
