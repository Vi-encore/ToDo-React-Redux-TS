// import { useDispatch } from "react-redux";
import { RootState } from "app/store";
import Card from "components/Card/Card";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ToDoList = (res: any) => {
  //any
  const arr = useSelector((state: RootState) => state.todo.data);
  const list = arr.map((item) => Card(item));

  if (arr.length === 0) {
    return <div className="dashboard__cards">No Items Found</div>;
  } else {
    return <div className="dashboard__cards">{list}</div>;
  }
};

export default ToDoList;
