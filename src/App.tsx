import { Routes, Route } from "react-router-dom";
import LoginPage from "components/LoginPage/LoginPage";
import Dashboard from "components/Dashboard/Dashboard";
import Redirect from "components/utils/routes";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={Redirect.login} element={<LoginPage />} />
        <Route path={Redirect.dashboard} element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
