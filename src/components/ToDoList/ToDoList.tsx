import { FC } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  useGetTodosQuery,
  useUpdateTodoMutation, //maybe not here
  useDeleteTodoMutation, //not heree?
} from "app/features/api/apiSlice";
import { RootState } from "app/store";
import Card from "components/Card/Card";
import Spinner from "components/Spinner/Spinner";

const ToDoList = () => {
  const email = useSelector((state: RootState) => state.email.value);
  const { data, error, isError, isLoading, isSuccess } = useGetTodosQuery(
    `${email}`
  );

  // const [updateTodo] = useUpdateTodoMutation();
  // const [deleteTodo] = useDeleteTodoMutation();

  let content: string | FC;

  if (isLoading) {
    content = <Spinner />; //spinner //typeee
  } else if (isSuccess) {
    if (data.length === 0) {
      content = `No todos found`;
    } else {
      content = data.map((item: object) => Card(item));
    }
  } else if (isError) {
    content = `ERROR ${error}`;
  }

  return <div className="dashboard__cards">{content}</div>;
};

export default ToDoList;
