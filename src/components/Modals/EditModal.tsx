import { FC, PropsWithChildren } from "react";
import "components/Modals/_editModal.scss";

const EditModal: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="edit">
      <div className="edit__container">
        <h2 className="edit__header">{children} card</h2>
        <div className="edit__type--section">
          <form className="edit__type--form">
            <label htmlFor="edit__title" className="edit__type--label">
              Title
            </label>
            <input type="text" className="edit__type--title" id="edit__title" />
            <label htmlFor="edit__title" className="edit__type--descr">
              Description
            </label>
            <input type="text" className="edit__type--desrc" id="edit__descr" />
          </form>
          <div className="edit__btn--section">
            <button className="edit__btn--close">Close</button>
            <button className="edit__btn--save">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
