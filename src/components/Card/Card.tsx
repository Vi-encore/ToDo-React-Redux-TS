import { FC, PropsWithChildren } from "react";
import EditBtn from "components/Buttons/EditBtn";
import DeleteBtn from "components/Buttons/DeleteBtn";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="dashboard__cards-card">
      <div className="dashboard__cards-card-textarea">
        <h2 className="dashboard__cards-card-textarea--title">{children}</h2>
        <div className="dashboard__cards-card-textarea--wrap">
          <p className="dashboard__cards-card-textarea--text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
      <div className="dashboard__cards-card-btns">
        <EditBtn>Edit</EditBtn>
        <DeleteBtn>Delete</DeleteBtn>
      </div>
    </div>
  );
};

export default Card;
