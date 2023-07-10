import { FC } from "react";
import { createModalBtnType } from "types/types";
import "src/styles/components/_CreateModalBtn.scss";

const CreateModalBtn: FC<createModalBtnType> = ({ children, isLoading }) => {
  return (
    <button className="modal__create-btn" type="submit" disabled={isLoading}>
      {children}
    </button>
  );
};

export default CreateModalBtn;
