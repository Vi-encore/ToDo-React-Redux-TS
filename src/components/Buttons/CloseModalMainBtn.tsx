import { FC } from "react";
import { closeBtnType } from "types/types";
import "src/styles/components/_CloseBtn.scss";

const CloseModalMainBtn: FC<closeBtnType> = ({
  children,
  isLoading,
  setModalOpen,
}) => {
  return (
    <button
      type="button"
      className="modal__close-btn"
      onClick={() => setModalOpen(false)}
      disabled={isLoading}
    >
      {children}
    </button>
  );
};

export default CloseModalMainBtn;
