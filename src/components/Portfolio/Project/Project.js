import s from "./Project.module.scss";

export const Project = (props) => {
  const {title, preViewImage, gitHubSourceCode, gitHubPagesURL, description} = props;

  const preViewImageStyle = {
    backgroundImage: `url(${preViewImage})`,
  };

  return (
    <div className={s.project}>
      <div className={s.preViewImage} style={preViewImageStyle}>
        <a
          className={s.detailsLink}
          href={gitHubSourceCode}
          title={"See project code on GitHub"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          Source Code on GitHub
        </a>
      </div>
      <div className={s.info}>
        <a
          href={gitHubPagesURL}
          title={"See project on GitHub Pages"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <h4>{title}</h4>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
};
