import s from "./Button.module.scss";

export const Button = (
  {onClick, color = "primary", outlined = false, children, ...props}
) => {
  const finalClassName = `${s.button} ${s[color]} ${outlined && s.outlined}`;

  return (
    <button
      className={finalClassName}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};