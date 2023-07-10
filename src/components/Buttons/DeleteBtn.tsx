import { FC, useState } from "react";
import { deleteBtnType } from "types/types";
import DeleteModal from "components/Modals/DeleteModal";

const DeleteBtn: FC<deleteBtnType> = ({ children, title, id }) => {
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

  console.log(typeof setModalDeleteOpen);

  return (
    <>
      <button
        className="dashboardCardBtn dashboard__cards-card-btns--delete "
        onClick={() => {
          setModalDeleteOpen(true);
        }}
      >
        {children}
      </button>

      <DeleteModal
        modalDeleteOpen={modalDeleteOpen}
        setModalDeleteOpen={setModalDeleteOpen}
        title={title}
        id={id}
      >
        Delete
      </DeleteModal>
    </>
  );
};

export default DeleteBtn;
