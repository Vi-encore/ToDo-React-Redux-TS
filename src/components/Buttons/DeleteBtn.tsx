import { FC, PropsWithChildren } from "react";

const DeleteBtn: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button
      className="dashboardCardBtn dashboard__cards-card-btns--delete "
      onClick={() => {
        console.log("Delete btn");
      }}
    >
      {children}
    </button>
  );
};

export default DeleteBtn;
