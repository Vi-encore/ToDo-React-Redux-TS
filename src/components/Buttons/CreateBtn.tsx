import { FC, PropsWithChildren } from "react";
import CreateModal from "components/Modals/EditModal";

const CreateBtn: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <button
        className="dashboardBtn dashboard__create-card-btn"
        onClick={() => {
          console.log("hi");
        }}
      >
        {children}
      </button>
      <CreateModal>Create</CreateModal>
    </>
  );
};

export default CreateBtn;
