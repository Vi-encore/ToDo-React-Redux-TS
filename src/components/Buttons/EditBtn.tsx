import { FC, useState } from "react";
import { editBtnType } from "types/types";
import EditModal from "components/Modals/EditModal";

const EditBtn: FC<editBtnType> = ({ children, title, description, id }) => {
  const [modalEditOpen, setModalEditOpen] = useState(false);

  return (
    <>
      <button
        className=" dashboardCardBtn dashboard__cards-card-btns--edit"
        onClick={() => {
          setModalEditOpen(true);
        }}
      >
        {children}
      </button>

      <EditModal
        modalEditOpen={modalEditOpen}
        setModalEditOpen={setModalEditOpen}
        title={title}
        description={description}
        id={id}
      >
        Edit
      </EditModal>
    </>
  );
};

export default EditBtn;
