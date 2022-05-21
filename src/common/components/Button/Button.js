import styles from "./Button.module.scss";

export const Button = ({text, onClick, color = "primary", outlined = false}) => {
  const finalClassName = `${styles.button} ${styles[color]} ${outlined && styles.outlined}`;

  return (
    <button className={finalClassName} onClick={onClick}>{text}</button>
  );
};