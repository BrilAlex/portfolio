import s from "./Progress.module.css";

export const Progress = ({progress}) => {
  const progressLineStyle = {width: `${progress}%`};

  return (
    <div className={s.progress}>
      <div className={s.progressBar} style={progressLineStyle}/>
    </div>
  );
};