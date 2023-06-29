import { FC, PropsWithChildren } from "react";
import "components/Modals/_deleteModal.scss";

const DeleteModal: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default DeleteModal;
