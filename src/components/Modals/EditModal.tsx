import { FC, PropsWithChildren, useEffect, useCallback } from "react"; //TYPE!!
import { useFormik } from "formik";
import classNames from "classnames";
import { string, object } from "yup";
import { toast } from "react-toastify";
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
  const [updateTodo, { isError, isSuccess, isLoading }] =
    useUpdateTodoMutation();
  const validationSchema = object({
    title: string().required(),
    description: string().required(),
  });

  const formik = useFormik({
    initialValues: {
      title: `${title}`,
      description: `${description}`,
    },
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: () => {
      updateTodo({
        id: id,
        title: formik.values.title,
        description: formik.values.description,
      });
      formik.setStatus(false);
      // setModalEditOpen(false);
    },
  });

  const classesTitle = classNames({
    "edit__type--input": formik.values.title.length > 0,
    "edit__type--input-error": formik.values.title.length === 0,
  });

  const classesDescr = classNames({
    "edit__type--input": formik.values.description.length > 0,
    "edit__type--input-error": formik.values.description.length === 0,
  });

  useEffect(() => {
    if (modalEditOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalEditOpen]);

  useEffect(() => {
    if (isSuccess) {
      setModalEditOpen(false);
      toast.success("Card has been edited");
    } else if (isError) {
      setModalEditOpen(false);
      toast.error("Something went wrong");
    }
  }, [isSuccess, isError, setModalEditOpen]);

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      formik.handleChange(e);
    },
    [formik]
  );

  const closeModal = () => {
    if (!isLoading) {
      setModalEditOpen(false);
      formik.values.title = `${title}`;
      formik.values.description = `${description}`;
    }
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setModalEditOpen(false);
    }
  });

  return (
    modalEditOpen && (
      <div className="edit" onClick={closeModal}>
        <div className="edit__container" onClick={(e) => e.stopPropagation()}>
          <button
            className="edit__exit--fixed"
            onClick={() => setModalEditOpen(false)}
            // role="button"
            disabled={isLoading}
          />
          <h2 className="edit__header">{children} card</h2>
          <div className="edit__type--section">
            <form className="edit__type--form" onSubmit={formik.handleSubmit}>
              <label htmlFor="edit__title" className="edit__type--label">
                Title
              </label>
              <input
                type="text"
                className={classesTitle}
                id="edit__title"
                onChange={changeHandler}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                name="title"
              />
              {formik.values.title.length === 0 ? (
                <div className="error-msg">This is required field</div>
              ) : (
                <></>
              )}
              <label htmlFor="edit__title" className="edit__type--label margin">
                Description
              </label>
              <input
                type="text"
                className={classesDescr}
                id="edit__descr"
                onChange={changeHandler}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                name="description"
              />
              {formik.values.description.length === 0 ? (
                <div className="error-msg">This is required field</div>
              ) : (
                <></>
              )}
              <div className="edit__btn--section">
                <CloseModalMainBtn
                  setModalOpen={setModalEditOpen}
                  isLoading={isLoading}
                >
                  Close
                </CloseModalMainBtn>

                <CreateModalBtn isLoading={isLoading}>Save</CreateModalBtn>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default EditModal;
