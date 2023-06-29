import { FC, PropsWithChildren } from "react";
import "components/Modals/_deleteModal.scss";

const DeleteModal: FC<PropsWithChildren> = ({ children }) => {
  console.log(children);
};

export default DeleteModal;
