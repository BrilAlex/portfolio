import styles from "./Project.module.css";

export const Project = (props) => {
  const {title, preViewImage, gitHubPagesURL, description} = props;

  const preViewImageStyle = `${styles.preViewImage}${preViewImage ? " " + styles[preViewImage] : ""}`;

  return (
    <div className={styles.project}>
      <div className={preViewImageStyle}>
        <a className={styles.detailsLink} href={gitHubPagesURL} title={"See project on GitHub Pages"}>
          See Details
        </a>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <h4>{title}</h4>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};