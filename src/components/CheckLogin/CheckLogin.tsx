import { FC, PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { RootState } from "app/store";
import appRoutes from "components/utils/routes";

const CheckLogin: FC<PropsWithChildren> = ({ children }) => {
  const email = useSelector((state: RootState) => state.email.value);

  const navigate = useNavigate();

  function checkNavigate() {
    if (email === "") navigate(appRoutes.login);
  }

  useEffect(() => {
    checkNavigate();
  });

  return children;
};

export default CheckLogin;
