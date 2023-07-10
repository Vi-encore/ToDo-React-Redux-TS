import { FC, useEffect } from "react"; //type!!!
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useDeleteTodoMutation } from "app/features/api/apiSlice";
import CloseModalMainBtn from "components/Buttons/CloseModalMainBtn";
import CreateModalBtn from "components/Buttons/CreateModalBtn";
import { deleteModalType } from "types/types";
import "components/Modals/_deleteModal.scss";

const DeleteModal: FC<deleteModalType> = ({
  children,
  setModalDeleteOpen,
  modalDeleteOpen,
  id,
  title,
}) => {
  const [deleteTodo, { isSuccess, isError, isLoading }] =
    useDeleteTodoMutation();
  const formik = useFormik({
    initialValues: {},
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: () => {
      deleteTodo({ id });
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
      setModalDeleteOpen(false);
      toast.success("Card has been deleted");
    } else if (isError) {
      setModalDeleteOpen(false);
      toast.error("Something went wrong");
    }
  }, [isSuccess, isError, setModalDeleteOpen]);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setModalDeleteOpen(false);
    }
  });

  const closeModal = () => {
    if (!isLoading) {
      setModalDeleteOpen(false);
    }
  };

  return (
    modalDeleteOpen && (
      <div className="delete" onClick={closeModal}>
        <div className="delete__container" onClick={(e) => e.stopPropagation()}>
          <button
            className="delete__exit--fixed"
            onClick={() => setModalDeleteOpen(false)}
            disabled={isLoading}
          />
          <h2 className="delete__header">{children} card</h2>
          <div className="delete__type--section">
            <form className="delete__type--form" onSubmit={formik.handleSubmit}>
              <p className="delete__type--confirm">
                Are you sure you want to delete "{title}" card ?
              </p>
              <div className="delete__btn--section">
                <CloseModalMainBtn
                  setModalOpen={setModalDeleteOpen}
                  isLoading={isLoading}
                >
                  Close
                </CloseModalMainBtn>
                <CreateModalBtn isLoading={isLoading}>Delete</CreateModalBtn>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteModal;
