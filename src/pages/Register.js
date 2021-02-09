import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Register.css";

function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const register = (e) => {
    e.preventDefault();

    //authetication, aspon by bolo
    console.log(email, password);
    history.push("/");
  };

  return (
    <div className="register">
      <div className="register__window">
        <div className="register__form">
          <div className="form__description">
            <h2>Create Account</h2>
            <p>A new Account for a new Action</p>
          </div>
          <form method="" action="">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <button className="register__button" onClick={register}>
              Register
            </button>
          </form>
        </div>
        <div className="register__image">
          <h2 className="">Welcome to the club</h2>
          <img
            src="https://cdn.dribbble.com/users/1346977/screenshots/7112868/media/a5b007aa79a3d328052b9d443465f420.png?compress=1&resize=400x400"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
