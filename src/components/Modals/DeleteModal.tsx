import { FC, PropsWithChildren } from "react"; //type!!!
import { useFormik } from "formik";
import { useDeleteTodoMutation } from "app/features/api/apiSlice";
import CloseModalMainBtn from "components/Buttons/CloseModalMainBtn";
import CreateModalBtn from "components/Buttons/CreateModalBtn";
import "components/Modals/_deleteModal.scss";

const DeleteModal: FC<any> = ({
  children,
  setModalDeleteOpen,
  modalDeleteOpen,
  id,
  title,
}) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const formik = useFormik({
    initialValues: {},
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: () => {
      deleteTodo({ id });
    },
  });

  return (
    modalDeleteOpen && (
      <div className="delete">
        <div className="delete__container">
          <div
            className="delete__exit--fixed"
            onClick={() => setModalDeleteOpen(false)}
            role="button"
          />
          <h2 className="delete__header">{children} card</h2>
          <div className="delete__type--section">
            <form className="delete__type--form" onSubmit={formik.handleSubmit}>
              <p className="delete__type--confirm">
                Are you sure you want to delete "{title}" card ?
              </p>
              <div className="delete__btn--section">
                <CloseModalMainBtn setModalOpen={setModalDeleteOpen}>
                  Close
                </CloseModalMainBtn>

                <CreateModalBtn>Delete</CreateModalBtn>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteModal;
