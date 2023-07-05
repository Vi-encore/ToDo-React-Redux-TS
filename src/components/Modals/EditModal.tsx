import { FC, PropsWithChildren } from "react"; //TYPE!!
import { useFormik } from "formik";
import { useUpdateTodoMutation } from "app/features/api/apiSlice";
import CloseModalMainBtn from "components/Buttons/CloseModalMainBtn";
import CreateModalBtn from "components/Buttons/CreateModalBtn";
import "components/Modals/_editModal.scss";

const EditModal: FC<any> = ({
  children,
  setModalEditOpen,
  modalEditOpen,
  title,
  description,
  id,
}) => {
  const [updateTodo] = useUpdateTodoMutation();

  const formik = useFormik({
    initialValues: {
      title: `${title}`,
      description: `${description}`,
    },
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: () => {
      updateTodo({
        id: id,
        title: formik.values.title,
        description: formik.values.description,
      });
      setModalEditOpen(false);
    },
  });

  return (
    modalEditOpen && (
      <div className="edit">
        <div className="edit__container">
          <div
            className="edit__exit--fixed"
            onClick={() => setModalEditOpen(false)}
            role="button"
          />
          <h2 className="edit__header">{children} card</h2>
          <div className="edit__type--section">
            <form className="edit__type--form" onSubmit={formik.handleSubmit}>
              <label htmlFor="edit__title" className="edit__type--label">
                Title
              </label>
              <input
                type="text"
                className="edit__type--input"
                id="edit__title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                name="title"
              />
              <label htmlFor="edit__title" className="edit__type--descr">
                Description
              </label>
              <input
                type="text"
                className="edit__type--input"
                id="edit__descr"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                name="description"
              />
              <div className="edit__btn--section">
                <CloseModalMainBtn setModalOpen={setModalEditOpen}>
                  Close
                </CloseModalMainBtn>

                <CreateModalBtn>Save</CreateModalBtn>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default EditModal;
