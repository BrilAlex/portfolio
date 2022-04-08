import commonStyles from "./../../assets/css/CommonStyles.module.css";
import styles from "./Portfolio.module.css";
import {Project} from "./Project/Project";

export const Portfolio = () => {
  const projects = [
    {id: 1, title: "Project 1", preViewImage: "", gitHubPagesURL: "", description: "Project 1 description"},
    {id: 2, title: "Project 2", preViewImage: "", gitHubPagesURL: "", description: "Project 2 description"},
  ];

  return (
    <div className={styles.portfolio}>
      <div className={`${commonStyles.container}`}>
        <div className={commonStyles.blockTitle}>
          <h2>Portfolio</h2>
        </div>
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