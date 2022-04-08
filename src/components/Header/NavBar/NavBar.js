import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <a href={"#main"}>Home</a>
      <a href={"#skills"}>Skills</a>
      <a href={"#portfolio"}>Portfolio</a>
      <a href={"#contacts"}>Contacts</a>
    </div>
  );
};