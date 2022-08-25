import s from "../../styles/sass/styles.module.scss";

export const Button = (
  {onClick, color = "primary", variant = "default", children, ...props}
) => {
  const finalClassName = `${s.button} ${s[color]} ${s[variant]}`;

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