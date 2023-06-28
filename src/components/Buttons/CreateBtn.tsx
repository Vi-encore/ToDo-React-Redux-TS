import { FC, PropsWithChildren } from "react";

const CreateBtn: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button
      className="dashboardBtn dashboard__create-card-btn"
      onClick={() => {
        console.log("Create Card btn");
      }}
    >
      {children}
    </button>
  );
};

export default CreateBtn;
