import { FC, PropsWithChildren, useEffect, useCallback } from "react"; //find corresponding type
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { object, string } from "yup";
import { toast } from "react-toastify";
import classNames from "classnames";
import CreateModalBtn from "components/Buttons/CreateModalBtn";
import CloseModalMainBtn from "components/Buttons/CloseModalMainBtn";
import { useAddTodoMutation } from "app/features/api/apiSlice";
import { RootState } from "app/store";
import "components/Modals/_createModal.scss";
import { log } from "console";

const CreateModal: FC<any> = ({
  children,
  modalOpen, //???
  setModalOpen, //???
}) => {
  const [addToDo, { isError, isSuccess }] = useAddTodoMutation();

  const email = useSelector((state: RootState) => state.email.value);

  const validationSchema = object({
    title: string().required(),
    description: string().required(),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: () => {
      if (formik.errors.title || formik.errors.description) {
        formik.setStatus(false);
      } else {
        addToDo({
          title: formik.values.title,
          description: formik.values.description,
          author: email,
        });
        formik.setStatus(false);
        setModalOpen(false);
        formik.values.title = "";
        formik.values.description = "";
      }
    },
  });

  const classesTitle = classNames({
    "create__type--input":
      formik.values.title.length > 0 || formik.status === true,
    "create__type--input-error":
      formik.status === false && formik.values.title.length === 0,
  });

  const classesDescr = classNames({
    "create__type--input":
      formik.values.description.length >= 0 || formik.status === true,
    "create__type--input-error":
      formik.status === false && formik.values.description.length === 0,
  });

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      formik.setStatus(false);
      formik.handleChange(e);
    },
    [formik]
  );

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      formik.setStatus(true);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalOpen]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Card has been created");
    } else if (isError) {
      toast.error("Something went wrong");
    }
  }, [isSuccess, isError]);

  const closeModal = () => {
    setModalOpen(false);
    formik.values.title = "";
    formik.values.description = "";
  };

  // const closeOnEsc = (e) => {
  //   console.log(e.key);

  //   // if (e.key === "Escape") {
  //   //   setModalOpen(false);
  //   // }
  // };
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setModalOpen(false);
    }
  });
  //clean fields?

  return (
    modalOpen && (
      <div className="create" onClick={closeModal}>
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
                className={classesTitle}
                id="create__title"
                onChange={changeHandler}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                name="title"
              />
              {formik.status === false && formik.values.title.length === 0 ? (
                <div className="error-msg">This is required field</div>
              ) : (
                <></>
              )}
              <label
                htmlFor="create__title"
                className="create__type--label margin"
              >
                Description
              </label>
              <input
                type="text"
                className={classesDescr}
                id="create__descr"
                onChange={changeHandler}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                name="description"
              />
              {formik.status === false &&
              formik.values.description.length === 0 ? (
                <div className="error-msg">This is required field</div>
              ) : (
                <></>
              )}
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
