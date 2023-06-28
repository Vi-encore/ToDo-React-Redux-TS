import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { useQuery } from "@tanstack/react-query"; //
import appRoutes from "components/utils/routes";
import { deleteLogin } from "app/features/inputReducer";
import type { RootState } from "app/store";
import "components/Dashboard/_dashboard.scss";
// import fetchList from "app/fetches/fetchList";
// import { isFulfilled } from "@reduxjs/toolkit";
import ToDoList from "components/ToDoList/ToDoList";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.email.value);
  const logOut = () => {
    dispatch(deleteLogin());
    navigate(appRoutes.login);
  };

  // const result = fetchList("dasf");
  // // console.log(result.then(Pr));
  // const fulfilled = result.then(isFulfilled);

  // if (!fulfilled) {
  //   const fulfilled = result.then(isFulfilled);
  //   return (
  //     <>
  //       <div>LOADING</div>
  //     </>
  //   );
  // }

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <p className="dashboard__email">{email}</p>
        <button className="dashboardBtn dashboard__exit-btn" onClick={logOut}>
          Log out
        </button>
      </div>
      <div className="dashboard__wrap">
        <div className="dashboard__create-card-btn--wrap">
          <button
            className="dashboardBtn dashboard__create-card-btn"
            onClick={() => {
              console.log("Create Card btn");
            }}
          >
            Create Card
          </button>
        </div>
        {/* <div className="dashboard__cards--wrap">  */}
        <ToDoList />
      </div>
    </div>
  );
};

export default Dashboard;
