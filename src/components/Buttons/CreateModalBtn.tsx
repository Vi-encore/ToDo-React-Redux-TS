import { FC, PropsWithChildren } from "react";
import "src/styles/components/_CreateModalBtn.scss";

const CreateModalBtn: FC<PropsWithChildren> = ({
  children,
  setModalOpen,
  input,
}) => {
  const createCardApi = () => {
    console.log(input);

    setModalOpen(false);
  };

  return (
    <button
      className="modal__create-btn"
      onClick={() => {
        createCardApi();
      }}
    >
      {children}
    </button>
  );
};

export default CreateModalBtn;
