import s from "./Footer.module.scss";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id={"footer"} className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          {year} &copy; Alex Brilevski. All rights reserved
        </div>
      </div>
    </footer>
  );
};
