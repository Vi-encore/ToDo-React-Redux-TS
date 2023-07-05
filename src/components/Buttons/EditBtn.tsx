import { FC, PropsWithChildren, useState } from "react";
import EditModal from "components/Modals/EditModal";

const EditBtn: FC<any> = ({ children, title, description }) => {
  const [modalEditOpen, setModalEditOpen] = useState(false);
  // console.log(title);

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
      >
        Edit
      </EditModal>
    </>
  );
};

export default EditBtn;
