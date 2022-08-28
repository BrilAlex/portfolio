import s from "./ModalBox.module.scss";

export const ModalBox = ({isShown, setIsShown, children}) => {
  if (!isShown) return;

  return (
    <>
      <div className={s.modalBg}/>
      <div className={s.modalWrap} onClick={() => setIsShown(false)}>
        <div className={s.modalContainer}>
          <div className={s.modalBox} onClick={(e) => e.stopPropagation()}>
            {children}
            <button className={s.buttonClose} onClick={() => setIsShown(false)}>×</button>
          </div>
        </div>
      </div>
    </>
  );
};
