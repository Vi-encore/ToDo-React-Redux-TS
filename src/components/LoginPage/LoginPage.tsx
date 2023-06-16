// import { Route, Router } from 'react-router-dom'

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [loginInput, setLoginInput] = useState("");
  const loginStore = localStorage.getItem("login");

  const navigate = useNavigate();

  const handleInput = (event: any) => {
    setLoginInput(event.target.value);
  };

  const handleLogin = (event: any) => {
    event.preventDefault();
    // const inputVal = event.target[0].value;

    if (!loginStore) {
      localStorage.setItem("login", loginInput);
      navigate("/dashboard");
    } else if (loginInput === loginStore) {
      navigate("/dashboard");
    } else {
      localStorage.setItem("login", loginInput);
      navigate("/dashboard");
    }
  };

  // if (loginStore) {
  //   navigate("/dashboard");
  // } else {
  return (
    <div className="loginPage">
      <div className="loginPage__box">
        <h1 className="loginPage__header">Login form</h1>
        <form
          className="loginPage__form"
          onSubmit={(e: any) => {
            handleLogin(e);
          }}
        >
          <label className="loginPage__label" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="loginPage__input"
            value={loginInput}
            onChange={handleInput}
          ></input>
          <button
            type="submit"
            value="Submit"
            className="btn loginPage__submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
  // }
}
