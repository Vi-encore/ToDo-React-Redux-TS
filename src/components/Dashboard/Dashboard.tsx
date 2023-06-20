import { useNavigate } from "react-router-dom";
import routes from "components/utils/routes";
import "components/Dashboard/_dashboard.scss";

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
      <div className="dashboard__wrap">
        <div className="dashboard__create-card-btn--wrap">
          <button
            className="dashboard__create-card-btn"
            onClick={() => {
              console.log("Create Card btn");
            }}
          >
            Create Card
          </button>
        </div>
        <div className="dashboard__cards">
          <div className="dashboard__card">
            <div className="dashboard__card-textarea">
              <h2 className="dashboard__card-textarea--title">Card title</h2>
              <p className="dashboard__card-textarea--text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <div className="dashboard__card-btns">
              <button
                className="dashboard__card-btns--edit"
                onClick={() => {
                  console.log("Edit btn");
                }}
              >
                Edit
              </button>
              <button
                className="dashboard__card-btns--delete"
                onClick={() => {
                  console.log("Delete btn");
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
