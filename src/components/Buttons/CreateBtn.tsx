import { FC, PropsWithChildren, useState } from "react";
import CreateModal from "components/Modals/CreateModal";

const CreateBtn: FC<PropsWithChildren> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="dashboardBtn dashboard__create-card-btn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {children}
      </button>

      <CreateModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        Create
      </CreateModal>
    </>
  );
};

export default CreateBtn;
