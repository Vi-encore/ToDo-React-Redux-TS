import { FC, PropsWithChildren } from "react";
import "src/styles/components/_CreateModalBtn.scss";

const CreateModalBtn: FC<PropsWithChildren> = ({ children, isLoading }) => {
  return (
    <button className="modal__create-btn" type="submit" disabled={isLoading}>
      {children}
    </button>
  );
};

export default CreateModalBtn;
