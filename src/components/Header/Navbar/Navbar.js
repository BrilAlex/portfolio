import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href={"#main"} className={`${styles.navLink} ${styles.active}`}>Home</a>
      <a href={"#skills"} className={styles.navLink}>Skills</a>
      <a href={"#portfolio"} className={styles.navLink}>Portfolio</a>
      <a href={"#contacts"} className={styles.navLink}>Contacts</a>
    </div>
  );
};