import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import "components/LoginPage/_login.scss";

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState("");

  const loginStore = localStorage.getItem("login");
  const submitBtn = document.querySelector(".loginPage__submit");

  const navigate = useNavigate();

  const handleInput = (event: any) => {
    setLoginInput(event.target.value);
  };

  const handleLogin = (event: any) => {
    if (!loginStore) {
      localStorage.setItem("login", loginInput);
      navigate("/dashboard");
    } else if (loginInput.length > 1) {
      console.log(submitBtn);

      if (loginInput === loginStore) {
        navigate("/dashboard");
      } else {
        localStorage.setItem("login", loginInput);
        navigate("/dashboard");
      }
    }
  };

  // if (loginStore) {
  //   navigate("/dashboard");
  // } else {
  return (
    <div className="loginPage">
      <div className="loginPage__box">
        <h1 className="loginPage__header">Login form</h1>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(e: object) => {
            handleLogin(e);
          }}
        >
          <Form className="loginPage__form">
            <label className="loginPage__label" htmlFor="email">
              Email
            </label>
            <Field
              name="email"
              type="email"
              className="loginPage__input"
              value={loginInput}
              onChange={handleInput}
            ></Field>
            <button
              type="submit"
              value="Submit"
              disabled={!loginInput}
              className="btn loginPage__submit"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
  // }
};

export default LoginPage;
