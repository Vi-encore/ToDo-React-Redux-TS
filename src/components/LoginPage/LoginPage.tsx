import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import "components/LoginPage/_login.scss";

const validate = (values: string, func: any, setValid: any) => {
  const errors: any = {};
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(values)) {
    errors.email = "Invalid Email";
    setValid(false);
    console.log(errors.email);
  } else {
    func();
  }

  return errors;
};

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState("");
  const [valid, setValid] = useState(true);
  const loginStore: string | null = localStorage.getItem("login");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: object({
      email: string().email("Invalid email address"),
    }),
    onSubmit: () => {
      validate(loginInput, handleLogin, setValid);
    },
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput(e.target.value);
    setValid(true);
  };

  const handleLogin = () => {
    if (!loginStore) {
      localStorage.setItem("login", loginInput);
      navigate("/dashboard");
      setValid(false);
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
            type={"text"}
            // onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // value={formik.values.email && loginInput}
            //helperText={formik.errors.email ? formik.errors.email : ""}
            className={valid ? "loginPage__input" : "loginPage__input--error"}
            value={loginInput}
            onChange={handleInput}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}

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
