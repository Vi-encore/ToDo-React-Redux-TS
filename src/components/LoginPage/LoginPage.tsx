import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import "components/LoginPage/_login.scss";

// const validate = (values: any) => {
//   let errors: any = {};
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/g;

//   if (!values.email) {
//     errors.email = "Email is required";
//     // handleLogin();
//   }
//   if (!regex.test(values.email)) {
//     errors.email = "Invalid Email";
//   }

//   return errors;
// };

// const LoginPage = () => {
//   const [loginInput, setLoginInput] = useState("");

//   const SignupSchema = Yup.object().shape({
//     email: Yup.string().email("Invalid email").required("Required"),
//   });
//   const loginStore: any = localStorage.getItem("login");
//   const submitBtn = document.querySelector(".loginPage__submit");
//   const navigate = useNavigate();

//   const handleInput = (event: any) => {
//     setLoginInput(event.target.value);
//   };

//   const handleLogin = () => {
//     // validate(loginStore, loginInput);
//     if (!loginStore) {
//       localStorage.setItem("login", loginInput);
//       navigate("/dashboard");
//     } else if (loginInput.length > 1) {
//       if (loginInput === loginStore) {
//         navigate("/dashboard");
//       } else {
//         localStorage.setItem("login", loginInput);
//         navigate("/dashboard");
//       }
//     }
//   };

//   // if (loginStore) {
//   //   navigate("/dashboard");
//   // } else {
//   return (
//     <div className="loginPage">
//       <div className="loginPage__box">
//         <h1 className="loginPage__header">Login form</h1>
//         <Formik
//           initialValues={{ email: "" }}
//           onSubmit={handleLogin}
//           // validationSchema={SignupSchema}
//           // validate={validate}
//         >
//           {/* {(formik) => {
//             const { errors, touched } = formik;
//             return ( */}
//           <Form className="loginPage__form">
//             <label className="loginPage__label" htmlFor="email">
//               Email
//             </label>
//             <Field
//               name="email"
//               type="email"
//               className="loginPage__input"
//               value={loginInput}
//               onChange={handleInput}
//             />
//             {/* {errors.email && touched.email ? (
//                   <div>{errors.email}</div>
//                 ) : null} */}
//             <button
//               type="submit"
//               value="Submit"
//               disabled={!loginInput}
//               className="btn loginPage__submit"
//             >
//               Submit
//             </button>
//           </Form>
//           {/* );
//           }} */}
//         </Formik>
//       </div>
//     </div>
//   );
//   // }
// };

// export default LoginPage;

const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email"),
});

const navigate = useNavigate();

const validate = (values: any, func: any, inputField: any) => {
  let errors: any = {};
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(values)) {
    errors.email = "Invalid Email";
    // inputField.invalid = true;
    console.log(errors.email);
  } else {
    func();
  }

  return errors;
};

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState("");
  const loginStore: any = localStorage.getItem("login");
  // const submitBtn: any = document.querySelector(".loginPage__submit");
  const inputField: any = document.querySelector(".loginPage__input");
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
            validate(loginInput, handleLogin, inputField);
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
