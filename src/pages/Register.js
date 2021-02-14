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
            <p>A new Account for a new Action.</p>
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
            <Link to="/login" className="register__link">
              Already Registered?
            </Link>
          </form>
        </div>
        <div className="register__image">
          <div className="image__headline">
            <h3>Join us today!</h3>
            <p>Where your plans and goals become reality.</p>
          </div>

          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p403x403/148002929_413839449689749_1907044659413814928_n.png?_nc_cat=105&ccb=3&_nc_sid=aee45a&_nc_ohc=6ddF5i5lwnMAX_mU4PE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_tp=30&oh=8c94003280c93819a17a0f8f524bd2c8&oe=6049E10B"
            alt="someimage"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
