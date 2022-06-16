import {useState} from "react";
import s from "./Navbar.module.scss";
import {Link} from "react-scroll";

export const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  const navLinkClickHandler = () => {
    setIsOpened(false);
  };

  const navbarClassName = isOpened ? `${s.navbar} ${s.opened}` : s.navbar;

  return (
    <>
      <button className={s.menuToggle} onClick={toggleMenu}>
        <span/>
        <span/>
        <span/>
      </button>
      <nav className={navbarClassName}>
        <Link
          className={s.navLink}
          activeClass={s.active}
          to={"home"}
          spy={true}
          smooth={true}
          offset={-78}
          duration={500}
          onClick={navLinkClickHandler}
        >
          Home
        </Link>
        <Link
          className={s.navLink}
          activeClass={s.active}
          to={"skills"}
          spy={true}
          smooth={true}
          offset={-78}
          duration={500}
          onClick={navLinkClickHandler}
        >
          Skills
        </Link>
        <Link
          className={s.navLink}
          activeClass={s.active}
          to={"portfolio"}
          spy={true}
          smooth={true}
          offset={-78}
          duration={500}
          onClick={navLinkClickHandler}
        >
          Portfolio
        </Link>
        <Link
          className={s.navLink}
          activeClass={s.active}
          to={"contacts"}
          spy={true}
          smooth={true}
          offset={-78}
          duration={500}
          onClick={navLinkClickHandler}
        >
          Contacts
        </Link>
      </nav>
    </>
  );
};
