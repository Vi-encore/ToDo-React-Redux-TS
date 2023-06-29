import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteLogin } from "app/features/inputReducer";
import appRoutes from "components/utils/routes";

const LogOut: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(deleteLogin());
    navigate(appRoutes.login);
  };

  return (
    <button className="dashboardBtn dashboard__exit-btn" onClick={logOut}>
      {children}
    </button>
  );
};

export default LogOut;
