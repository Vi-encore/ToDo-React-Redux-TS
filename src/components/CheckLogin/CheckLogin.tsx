import { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "app/store";
import appRoutes from "components/utils/routes";

const CheckLogin: FC<PropsWithChildren> = ({ children }) => {
  const email = useSelector((state: RootState) => state.email.value);
  const navigate = useNavigate();

  if (!email) navigate(appRoutes.login);

  console.log(email === "");

  //   if (!email) {
  //     useEffect(() => {
  //       navigate(Redirect.login);
  //     });
  //   }

  return children;
};

export default CheckLogin;
