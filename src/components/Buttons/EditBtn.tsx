import { FC, PropsWithChildren } from "react";

const EditBtn: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button
      className=" dashboardCardBtn dashboard__cards-card-btns--edit"
      onClick={() => {
        console.log("Edit btn");
      }}
    >
      {children}
    </button>
  );
};

export default EditBtn;
