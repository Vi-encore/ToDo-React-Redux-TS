import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import LoginPage from "components/LoginPage/LoginPage";
import Dashboard from "components/Dashboard/Dashboard";
import CheckLogin from "components/CheckLogin/CheckLogin";
import appRoutes from "components/utils/routes";
import store from "app/store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path={appRoutes.login} element={<LoginPage />} />

          <Route
            path={appRoutes.dashboard}
            element={
              <CheckLogin>
                <Dashboard />
              </CheckLogin>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
