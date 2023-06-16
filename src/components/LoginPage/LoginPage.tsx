// import { Route, Router } from 'react-router-dom'

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [loginInput, setLoginInput] = useState("");

  const navigate = useNavigate();

  const handleInput = (event: any) => {
    setLoginInput(event.target.value);
  };

  const handleLogin = (event: any) => {
    event.preventDefault();
    const loginStore = localStorage.getItem("login");

    if (!loginStore) {
      localStorage.setItem("login", loginInput);
      navigate("/dashboard");
    } else {
      navigate("/dashboard");
    }
  };

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
          <label className="loginPage__label" htmlFor="login">
            Email
          </label>
          <input
            name="login"
            type="login"
            className="loginPage__input"
            value={loginInput}
            onChange={handleInput}
          ></input>
          <input
            type="submit"
            value="Submit"
            className="btn loginPage__submit"
          />
        </form>
      </div>
    </div>
  );
}
