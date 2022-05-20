import styles from "./Project.module.css";

export const Project = (props) => {
  const {title, preViewImage, gitHubPagesURL, description} = props;

  const preViewImageStyle = {
    backgroundImage: `url(${preViewImage})`,
  };

  return (
    <div className={styles.project}>
      <div className={styles.preViewImage} style={preViewImageStyle}>
        <a className={styles.detailsLink} href={gitHubPagesURL} title={"See project on GitHub Pages"}>
          See Details
        </a>
      </div>
      <div className={styles.info}>
        <a href={"#1"}>
          <h4>{title}</h4>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
};