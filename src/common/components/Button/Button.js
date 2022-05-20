import styles from "./Button.module.css";

export const Button = ({text, onClick, outlined}) => {
  const finalClassName = `${styles.button} ${outlined && styles.outlined}`;

  return (
    <button className={finalClassName} onClick={onClick}>{text}</button>
  );
};