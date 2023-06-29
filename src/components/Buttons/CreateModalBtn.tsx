import { FC, PropsWithChildren } from "react";
import "src/styles/components/_CreateModalBtn.scss";

const CreateModalBtn: FC<PropsWithChildren> = ({
  children,
  setModalOpen,
  input,
}) => {
  return (
    <button className="modal__create-btn" type="submit">
      {children}
    </button>
  );
};

export default CreateModalBtn;
