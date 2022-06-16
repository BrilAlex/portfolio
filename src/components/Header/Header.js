import s from "./Header.module.scss";
import {Navbar} from "./Navbar/Navbar";

export const Header = () => {
  return (
    <header id={"header"} className={s.header}>
      <div className={s.container}>
        <Navbar/>
      </div>
    </header>
  );
};
