import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { object, string } from "yup";
import "components/LoginPage/_login.scss";

const DisplayingErrorMessagesSchema = object().shape({
  email: string().email("Invalid email"),
});

const validate = (values: any, func: any) => {
  let errors: any = {};
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(values)) {
    errors.email = "Invalid Email";
    console.log(errors.email);
  } else {
    func();
  }

  return errors;
};

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState("");
  const loginStore: any = localStorage.getItem("login");
  const navigate = useNavigate();
  // const submitBtn: any = document.querySelector(".loginPage__submit");
  // const inputField: any = document.querySelector(".loginPage__input");
  // const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput(e.target.value);
  };

  const handleLogin = () => {
    if (!loginStore) {
      localStorage.setItem("login", loginInput);
      navigate("/dashboard");
    } else if (loginInput.length > 1) {
      if (loginInput === loginStore) {
        navigate("/dashboard");
      } else {
        localStorage.setItem("login", loginInput);
        navigate("/dashboard");
      }
    }
  };

  return (
    <div className="loginPage">
      <div className="loginPage__box">
        <h1 className="loginPage__header">Login form</h1>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={DisplayingErrorMessagesSchema}
          onSubmit={() => {
            validate(loginInput, handleLogin);
          }}
        >
          {/* {({ errors, touched }) => ( */}
          <Form className="loginPage__form">
            <Field
              name="email"
              type="email"
              className="loginPage__input"
              value={loginInput}
              onChange={handleInput}
            />
            {/* {/* If this field has been touched, and it contains an error, display
          it */}
            {/* {touched.email && errors.email && <div>{errors.email}</div>} */}
            <button
              type="submit"
              value="Submit"
              disabled={!loginInput}
              className="btn loginPage__submit"
            >
              Submit
            </button>
          </Form>
          {/* )} */}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
