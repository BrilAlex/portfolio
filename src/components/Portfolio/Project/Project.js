import s from "./Project.module.scss";

export const Project = (props) => {
  const {title, preViewImage, gitHubPagesURL, description} = props;

  const preViewImageStyle = {
    backgroundImage: `url(${preViewImage})`,
  };

  return (
    <div className={s.project}>
      <div className={s.preViewImage} style={preViewImageStyle}>
        <a className={s.detailsLink} href={gitHubPagesURL} title={"See project on GitHub Pages"}>
          See Details
        </a>
      </div>
      <div className={s.info}>
        <a href={"#1"}>
          <h4>{title}</h4>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
};
