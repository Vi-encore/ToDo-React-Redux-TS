import { useNavigate } from "react-router-dom";
import routes from "components/utils/routes";

const Dashboard = () => {
  const navigate = useNavigate();
  const Click = () => {
    localStorage.clear();
    navigate(routes.login);
  };

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <p className="dashboard__email">{localStorage.getItem("login")}</p>
        <button className="dashboard__exit-btn" onClick={Click}>
          Log out
        </button>
      </div>
      <button
        className="dashboard__create-card-btn"
        onClick={() => {
          console.log("hi");
        }}
      >
        Create
      </button>
      <h1>I am Dashboard page!</h1>
    </div>
  );
};

export default Dashboard;
