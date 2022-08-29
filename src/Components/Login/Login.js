import React, { useState, useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import loginHelper from "../Utils/LoginHelper";

import "./Login.css";
const Login = () => {
  const { setisLogin } = useContext(ExpenseContext);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const onChangeHandler = (e, name) => {
    setUser({ ...user, [name]: e.target.value });
  };

  const onSubmitValidator = (e) => {
    user.username === "admin" && user.password === "admin"
      ? setisLogin(true)
      : e.target.reset();
  };

  return (
    <div className="login-container">
      <form onSubmit={(e) => onSubmitValidator(e)} className="form-container">
        {loginHelper.map((item, index) => (
          <React.Fragment key={index}>
            <label>{item.label}</label>
            <input
              onChange={(e) => onChangeHandler(e, item.name)}
              name={item.name}
              type={item.type}
              className={item.className}
            />
          </React.Fragment>
        ))}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
