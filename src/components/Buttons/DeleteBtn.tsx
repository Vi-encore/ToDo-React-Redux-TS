import { FC, PropsWithChildren, useState } from "react"; //type!!
import DeleteModal from "components/Modals/DeleteModal";

const DeleteBtn: FC<any> = ({ children, title, id }) => {
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

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
