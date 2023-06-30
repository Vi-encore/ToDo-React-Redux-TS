import { FC, PropsWithChildren, useCallback } from "react";
import { useFormik } from "formik";
import CreateModalBtn from "components/Buttons/CreateModalBtn";
import CloseModalMainBtn from "components/Buttons/CloseModalMainBtn";
import "components/Modals/_createModal.scss";

const CreateModal: FC<PropsWithChildren> = ({
  children,
  modalOpen,
  setModalOpen, //???
}) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: () => {
      // console.log(formik.values.title);
      // console.log(formik.values.description);
      setModalOpen(false);
      formik.values.title = "";
      formik.values.description = "";
    },
  });

  return (
    modalOpen && (
      <div className="create">
        <div className="create__container">
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
                <CreateModalBtn setModalOpen={setModalOpen}>
                  Create
                </CreateModalBtn>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default CreateModal;
