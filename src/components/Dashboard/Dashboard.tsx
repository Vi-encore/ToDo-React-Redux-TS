import { useNavigate } from "react-router-dom";
import routes from "components/utils/routes";

const Dashboard = () => {
  const navigate = useNavigate();
  const Click = () => {
    localStorage.clear();
    navigate(routes.login);
  };

  return (
    <>
      <h1>I am Dashboard page!</h1>
      <button onClick={Click}>exit</button>
    </>
  );
};

export default Dashboard;
