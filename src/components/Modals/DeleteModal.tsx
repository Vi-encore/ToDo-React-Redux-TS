import { FC, PropsWithChildren, useEffect } from "react"; //type!!!
import { useFormik } from "formik";
import { toast } from "react-toastify";
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
  const [deleteTodo, { isSuccess, isError }] = useDeleteTodoMutation();
  const formik = useFormik({
    initialValues: {},
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: () => {
      deleteTodo({ id });
      setModalDeleteOpen(false);
    },
  });

  useEffect(() => {
    if (modalDeleteOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalDeleteOpen]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Card has been deleted");
    } else if (isError) {
      toast.error("Something went wrong");
    }
  }, [isSuccess, isError]);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setModalDeleteOpen(false);
    }
  });

  return (
    modalDeleteOpen && (
      <div className="delete" onClick={() => setModalDeleteOpen(false)}>
        <div className="delete__container" onClick={(e) => e.stopPropagation()}>
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
