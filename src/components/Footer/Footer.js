import s from "./Footer.module.scss";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id={"footer"} className={s.footer}>
      <div className={s.container}>
        <p className={s.copyright}>
          &copy; {year} Alex Brilevski. All rights reserved
        </p>
      </div>
    </footer>
  );
};
