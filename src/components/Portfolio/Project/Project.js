import s from "./Project.module.scss";
import {useState} from "react";
import {ModalBox} from "../../../common/components/ModalBox/ModalBox";

export const Project = ({project}) => {
  const {
    title,
    previewImage,
    sourceCodeURL,
    gitHubPagesURL,
    stack,
    description,
    period,
  } = project;

  const [isShown, setIsShown] = useState(false);

  const previewImageStyle = {
    backgroundImage: `url(${previewImage})`,
  };

  return (
    <>
      <div className={s.project} onClick={() => setIsShown(true)}>
        <div className={s.previewImage} style={previewImageStyle}/>
        <div className={s.info}>
          <h4>{title}</h4>
        </div>
        <div className={s.overlay}>
          <div className={s.detailsLink}>Show project</div>
        </div>
      </div>

      <ModalBox isShown={isShown} setIsShown={setIsShown}>
        <div className={s.modalProject}>
          <h2>{title}</h2>
          <div className={s.projectInfo}>
            <div className={s.projectImage}>
              <img src={previewImage} alt={title}/>
            </div>
            <div className={s.projectDescription}>
              <h4>Project Details:</h4>
              <ul>
                <li><span>Technologies:</span> {stack}</li>
                <li><span>Date:</span> {period}</li>
                <li><span>URL:</span> <a href={gitHubPagesURL}>View on GitHub Pages</a></li>
                <li><span>Source Code:</span> <a href={sourceCodeURL}>View on GitHub</a></li>
              </ul>
              {description &&
                <>
                  <h4>Project Info:</h4>
                  <p>
                    {description}
                  </p>
                </>
              }
            </div>
          </div>
        </div>
      </ModalBox>
    </>
  );
};
