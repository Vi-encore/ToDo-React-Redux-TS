import { FC, PropsWithChildren } from "react";
import EditBtn from "components/Buttons/EditBtn";
import DeleteBtn from "components/Buttons/DeleteBtn";

const Card: FC = (children: any) => {
  const { title, description, id } = children;
  // console.log();

  // const { title, body, id } = children;

  // in p => {description}; in h2 => {title}
  return (
    <div className="dashboard__cards-card" key={id}>
      <div className="dashboard__cards-card-textarea">
        <h2 className="dashboard__cards-card-textarea--title">{title}</h2>
        <div className="dashboard__cards-card-textarea--wrap">
          <p className="dashboard__cards-card-textarea--text">{description}</p>
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
