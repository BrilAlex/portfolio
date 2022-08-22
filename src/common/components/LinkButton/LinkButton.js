import s from "./LinkButton.module.scss";

export const LinkButton = (
  {url, color = "primary", outlined = false, children, ...props}
) => {
  const finalClassName = `${s.linkButton} ${s[color]} ${outlined && s.outlined}`;

  return (
    <a href={url} className={finalClassName} {...props}>{children}</a>
  );
};