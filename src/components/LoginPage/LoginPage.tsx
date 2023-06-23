import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import Redirect from "components/utils/routes";
import "components/LoginPage/_login.scss";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "app/features/inputReducer";
import classNames from "classnames";

const LoginPage = () => {
  const navigate = useNavigate();

  // const inputValue = useSelector((state: any) => state.input);
  const dispatch = useDispatch();

  const validationScheme = object({
    email: string()
      .email("Invalid email address")
      .required()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address"
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationScheme,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: () => {
      handleLogin();
    },
  });

  const handleLogin = () => {
    dispatch(setLogin(formik.values.email));
    navigate(Redirect.dashboard);
  };

  //secure routes?
  useEffect(() => {
    localStorage.getItem("login") && navigate(Redirect.dashboard); //redux-email here ?
  });

  const classes = classNames({
    loginPage__input:
      formik.values.email.length >= 0 ||
      (formik.errors.email && formik.status === "true"),
    "loginPage__input--error": formik.errors.email && formik.status === "false",
  });

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      formik.handleSubmit(e);
      formik.setStatus("false");
    },
    [formik]
  );

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      formik.handleChange(e);
      formik.setStatus("true");
    },
    [formik]
  );

  return (
    <div className="loginPage">
      <div className="loginPage__box">
        <h1 className="loginPage__header">Login form</h1>

        <form className="loginPage__form" onSubmit={submitHandler}>
          <label htmlFor="email" className="loginPage__label">
            Email
          </label>
          <input
            name="email"
            type={"text"}
            onChange={changeHandler}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={classes}
          />
          {formik.touched.email &&
            formik.errors.email &&
            (formik.status === "false" ? (
              <div className="loginPage__error-msg">{formik.errors.email}</div>
            ) : (
              <></>
            ))}

          <button
            type="submit"
            value="Submit"
            disabled={!formik.values.email.length}
            className="btn loginPage__submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
