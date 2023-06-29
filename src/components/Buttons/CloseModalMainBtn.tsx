import { FC, PropsWithChildren, useState } from "react";
import "src/styles/components/_CloseBtn.scss";

const CloseModalMainBtn: FC<PropsWithChildren> = ({
  children,
  setModalOpen,
}) => {
  // const [modalOpen, setModalOpen] = useState(true);
  return (
    <button
      className="modal__close-btn"
      onClick={() => {
        setModalOpen(false);
      }}
    >
      {children}
    </button>
  );
};

export default CloseModalMainBtn;
