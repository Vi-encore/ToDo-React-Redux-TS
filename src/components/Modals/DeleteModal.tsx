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
      <div className="edit">
        <div className="edit__container">
          <div
            className="edit__exit--fixed"
            onClick={() => setModalDeleteOpen(false)}
            role="button"
          />
          <h2 className="edit__header">{children} card</h2>
          <div className="edit__type--section">
            <form className="edit__type--form" onSubmit={formik.handleSubmit}>
              <p className="edit__type--confirm">
                Are you sure you want to delete "{title}" card ?
              </p>
              <div className="edit__btn--section">
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
