import { Routes, Route } from "react-router-dom";
import LoginPage from "components/LoginPage/LoginPage";
import Dashboard from "components/Dashboard/Dashboard";
import Redirect from "components/utils/routes";
// import store from "src/app/store";
// import { Provider } from "react-redux";

const App = () => {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      <Routes>
        <Route path={Redirect.login} element={<LoginPage />} />
        <Route path={Redirect.dashboard} element={<Dashboard />} />
      </Routes>
      {/* </Provider> */}
    </div>
  );
};

export default App;
