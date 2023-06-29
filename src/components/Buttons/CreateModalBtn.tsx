import { FC, PropsWithChildren } from "react";
import "src/styles/components/_CreateModalBtn.scss";

const CreateModalBtn: FC<PropsWithChildren> = ({ children }) => {
  return <button className="modal__create-btn">{children}</button>;
};

export default CreateModalBtn;
