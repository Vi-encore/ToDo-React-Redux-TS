// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import routes from "components/utils/routes";
import "components/LoginPage/_login.scss";
import Dashboard from "components/Dashboard/Dashboard";

const LoginPage = () => {
  // const [loginInput, setLoginInput] = useState("");
  // const [valid, setValid] = useState(true);
  // const loginStore: string | null = localStorage.getItem("login");
  const navigate = useNavigate();

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
      console.log(formik);

      // console.log(formik.status);

      handleLogin();
    },
  });

  const handleLogin = () => {
    //   if (!formik.values.email) {
    //     localStorage.setItem("login", loginInput);
    //     navigate(routes.dashboard);
    //     setValid(false);
    //   } else if (loginInput.length > 1) {
    //     if (loginInput === loginStore) {
    //       navigate(routes.dashboard);
    //     } else {

    localStorage.setItem("login", formik.values.email);
    navigate(routes.dashboard);

    //     }
    //   }
  };

  // console.log(formik.handleChange);
  if (localStorage.getItem("login")) {
    return <Dashboard />;
  } else {
    return (
      <div className="loginPage">
        <div className="loginPage__box">
          <h1 className="loginPage__header">Login form</h1>

          <form className="loginPage__form" onSubmit={formik.handleSubmit}>
            <label htmlFor="email" className="loginPage__label">
              Email
            </label>
            <input
              name="email"
              type={"text"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={
                !formik.errors.email
                  ? "loginPage__input"
                  : "loginPage__input--error"
              }
            />
            {formik.touched.email && formik.errors.email && (
              <div>{formik.errors.email}</div>
            )}

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
  }
};

export default LoginPage;
