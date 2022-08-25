import s from "../../styles/sass/styles.module.scss";

export const LinkButton = (
  {url, color = "primary", variant = "default", children, ...props}
) => {
  const finalClassName = `${s.button} ${s[color]} ${s[variant]}`;

  return (
    <a href={url} className={finalClassName} {...props}>{children}</a>
  );
};