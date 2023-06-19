import { Routes, Route } from "react-router-dom";
import LoginPage from "components/LoginPage/LoginPage";
import Dashboard from "components/Dashboard/Dashboard";
import routes from "components/utils/Routes";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.dashboard} element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
