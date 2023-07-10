import { FC } from "react";
import { cardInfoType } from "types/types";
import EditBtn from "components/Buttons/EditBtn";
import DeleteBtn from "components/Buttons/DeleteBtn";

const Card: FC<cardInfoType> = (children) => {
  const { title, description, id } = children;

  return (
    <div className="dashboard__cards-card" key={id}>
      <div className="dashboard__cards-card-textarea">
        <h2 className="dashboard__cards-card-textarea--title">{title}</h2>
        <div className="dashboard__cards-card-textarea--wrap">
          <p className="dashboard__cards-card-textarea--text">{description}</p>
        </div>
      </div>
      <div className="dashboard__cards-card-btns">
        <EditBtn title={title} description={description} id={id}>
          Edit
        </EditBtn>
        <DeleteBtn title={title} id={id}>
          Delete
        </DeleteBtn>
      </div>
    </div>
  );
};

export default Card;
