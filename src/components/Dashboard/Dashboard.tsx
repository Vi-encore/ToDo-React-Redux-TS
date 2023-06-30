import { useSelector } from "react-redux";
import type { RootState } from "app/store";
import CreateBtn from "components/Buttons/CreateBtn";
import LogOut from "components/Buttons/LogOutBtn";
import ToDoList from "components/ToDoList/ToDoList";
import getInitToDos from "fetches/getInitToDos";
// import CreateEditModal from "components/Modals/EditModal";
import "components/Dashboard/_dashboard.scss";

const Dashboard = () => {
  const email = useSelector((state: RootState) => state.email.value);
  getInitToDos(email);

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <p className="dashboard__email">{email}</p>
        <LogOut>Log out</LogOut>
      </div>
      <div className="dashboard__wrap">
        <div className="dashboard__create-card-btn--wrap">
          <CreateBtn>Create Card</CreateBtn>
        </div>
        {/* <div className="dashboard__cards--wrap">  */}
        <ToDoList />
      </div>
    </div>
  );
};

export default Dashboard;
