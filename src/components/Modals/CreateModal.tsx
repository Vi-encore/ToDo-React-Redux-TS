import { FC, PropsWithChildren } from "react";
import CreateModalBtn from "components/Buttons/CreateModalBtn";
import CloseModalMainBtn from "components/Buttons/CloseModalMainBtn";
import "components/Modals/_createModal.scss";

const CreateModal: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="create">
      <div className="create__container">
        <button className="create__exit--fixed" />
        <h2 className="create__header">{children} card</h2>
        <div className="create__type--section">
          <form className="create__type--form">
            <label htmlFor="create__title" className="create__type--label">
              Title
            </label>
            <input
              type="text"
              className="create__type--input"
              id="create__title"
            />
            <label htmlFor="create__title" className="create__type--label">
              Description
            </label>
            <input
              type="text"
              className="create__type--input"
              id="create__descr"
            />
          </form>
          <div className="create__btn--section">
            <CloseModalMainBtn>Close</CloseModalMainBtn>
            <CreateModalBtn>Create</CreateModalBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
