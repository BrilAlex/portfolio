import s from "./ModalBox.module.scss";

export const ModalBox = ({isShown, setIsShown, children}) => {
  if (!isShown) return;

  return (
    <div className={s.modalBox}>
      {children}
      <button className={s.buttonClose} onClick={() => setIsShown(false)}>×</button>
    </div>
  );
};
