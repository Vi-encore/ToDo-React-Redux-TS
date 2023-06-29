import { FC, PropsWithChildren } from "react";
import "components/Modals/_createEditModal.scss";

const CreateModal: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="create">
      <div className="create__container">
        <h2 className="create__header">{children} card</h2>
        <div className="create__type--section">
          <form className="create__type--form">
            <label htmlFor="create__title" className="create__type--label">
              Title
            </label>
            <input
              type="text"
              className="create__type--title"
              id="create__title"
            />
            <label htmlFor="create__title" className="create__type--descr">
              Description
            </label>
            <input
              type="text"
              className="create__type--desrc"
              id="create__descr"
            />
          </form>
          <div className="create__btn--section">
            <button className="create__btn--close">Close</button>
            <button className="create__btn--save">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
