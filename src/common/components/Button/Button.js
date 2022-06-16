import s from "./Button.module.scss";

export const Button = ({text, onClick, color = "primary", outlined = false}) => {
  const finalClassName = `${s.button} ${s[color]} ${outlined && s.outlined}`;

  return (
    <button className={finalClassName} onClick={onClick}>{text}</button>
  );
};