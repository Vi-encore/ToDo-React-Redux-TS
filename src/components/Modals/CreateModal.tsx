import { FC, PropsWithChildren } from "react";
// import { useFormik } from "formik";
import CreateModalBtn from "components/Buttons/CreateModalBtn";
import CloseModalMainBtn from "components/Buttons/CloseModalMainBtn";
import "components/Modals/_createModal.scss";
import { string } from "yup";

const CreateModal: FC<PropsWithChildren> = ({
  children,
  modalOpen,
  setModalOpen, //???
}) => {
  // const formik = useFormik({
  //   initialValues: {
  //     input: "",
  //   },
  //   validationSchema: string(),
  //   validateOnChange: false,
  //   validateOnBlur: false,
  //   onSubmit: () => {
  //     console.log(input);
  //   },
  // });

  return (
    <>
      {modalOpen && (
        <div className="create">
          <div className="create__container">
            <div
              className="create__exit--fixed"
              onClick={() => setModalOpen(false)}
              role="button"
            />
            <h2 className="create__header">{children} card</h2>
            <div className="create__type--section">
              <form
                className="create__type--form"
                // onSubmit={formik.handleSubmit()}
              >
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
                <CloseModalMainBtn setModalOpen={setModalOpen}>
                  Close
                </CloseModalMainBtn>
                <CreateModalBtn setModalOpen={setModalOpen}>
                  Create
                </CreateModalBtn>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateModal;
