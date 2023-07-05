import { FC, PropsWithChildren } from "react"; //TYPE!!
import { useSelector } from "react-redux";
import { useFormik, useField } from "formik";
import { RootState } from "app/store";
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
}) => {
  const email = useSelector((state: RootState) => state.email.value);
  const [updateTodo] = useUpdateTodoMutation();

  const formik = useFormik({
    initialValues: {
      title: `${title}`,
      description: `${description}`,
    },
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: () => {
      // setModalEditOpen(false);
      // console.log(formik.values.title);

      updateTodo({
        // id: id,
        title: formik.values.title,
        description: formik.values.description,
        // author: email,
      });
    },
  });

  // const titles = document.querySelector("form");
  // console.log(formik.getFieldProps(titles).value.title);

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
            <form className="edit__type--form">
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
                {/* <button className="edit__btn--close">Close</button> */}
                <CloseModalMainBtn setModalOpen={setModalEditOpen}>
                  Close
                </CloseModalMainBtn>
                {/* <button className="edit__btn--save">Save</button> */}
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
