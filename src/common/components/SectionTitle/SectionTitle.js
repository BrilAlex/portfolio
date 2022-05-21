import styles from "./SectionTitle.module.scss";

export const SectionTitle = (props) => {
  return (
    <div className={styles.sectionTitle}>
      <h2>{props.title}</h2>
      {props.subtitle && <p>{props.subtitle}</p>}
      <span className={styles.sBorder}/>
    </div>
  );
};