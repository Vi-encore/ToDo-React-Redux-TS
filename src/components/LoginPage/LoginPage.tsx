import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
// import { object, string } from "yup";
import "components/LoginPage/_login.scss";

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState("");
  const loginStore: any = localStorage.getItem("login");
  const navigate = useNavigate();

  const validate = (values: any, func: any) => {
    const errors: any = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(values)) {
      errors.email = "Invalid Email";
      console.log(errors.email);
    } else {
      func();
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: () => {
      validate(loginInput, handleLogin);
    },
  });

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

        <form className="loginPage__form" onSubmit={formik.handleSubmit}>
          <label htmlFor="email" className="loginPage__label">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="loginPage__input"
            value={loginInput}
            onChange={handleInput}
          />

          <button
            type="submit"
            value="Submit"
            disabled={!loginInput}
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
