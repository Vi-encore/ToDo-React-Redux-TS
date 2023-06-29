import { FC, PropsWithChildren } from "react";
import "src/styles/components/_CloseBtn.scss";

const CloseModalMainBtn: FC<PropsWithChildren> = ({ children }) => {
  return <button className="modal__close-btn">{children}</button>;
};

export default CloseModalMainBtn;
