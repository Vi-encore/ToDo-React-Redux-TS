import { FC, PropsWithChildren } from "react"; //find corresponding type
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import CreateModalBtn from "components/Buttons/CreateModalBtn";
import CloseModalMainBtn from "components/Buttons/CloseModalMainBtn";
import { useAddTodoMutation } from "app/features/api/apiSlice";
import "components/Modals/_createModal.scss";
import { RootState } from "app/store";

const CreateModal: FC<any> = ({
  children,
  modalOpen, //???
  setModalOpen, //???
}) => {
  const [addToDo] = useAddTodoMutation();
  const email = useSelector((state: RootState) => state.email.value);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: () => {
      addToDo({
        title: formik.values.title,
        description: formik.values.description,
        author: email,
      });
      setModalOpen(false);
      formik.values.title = "";
      formik.values.description = "";
    },
  });

  return (
    modalOpen && (
      <div className="create" onClick={() => setModalOpen(false)}>
        <div className="create__container" onClick={(e) => e.stopPropagation()}>
          <div
            className="create__exit--fixed"
            onClick={() => setModalOpen(false)}
            role="button"
          />
          <h2 className="create__header">{children} card</h2>
          <div className="create__type--section">
            <form className="create__type--form" onSubmit={formik.handleSubmit}>
              <label htmlFor="create__title" className="create__type--label">
                Title
              </label>
              <input
                type="text"
                className="create__type--input"
                id="create__title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                name="title"
              />
              <label htmlFor="create__title" className="create__type--label">
                Description
              </label>
              <input
                type="text"
                className="create__type--input"
                id="create__descr"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                name="description"
              />
              <div className="create__btn--section">
                <CloseModalMainBtn setModalOpen={setModalOpen}>
                  Close
                </CloseModalMainBtn>
                <CreateModalBtn>Create</CreateModalBtn>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default CreateModal;
