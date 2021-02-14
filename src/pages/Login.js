import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    //authetication, aspon by bolo
    console.log(email, password);
    history.push("/");
  };

  return (
    <div className="login">
      <div className="login__window">
        <div className="login__form">
          <div className="form__description">
            <h2>Login Now</h2>
            <p>The Account is Ready for You.</p>
          </div>
          <form method="" action="">
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

            <button className="login__button" onClick={login}>
              Login
            </button>
            <Link to="/register" className="login__link">
              Don't have an Account?
            </Link>
          </form>
        </div>
        <div className="login__image">
          <div className="login__image__headline">
            <h3>Welcome back!</h3>
            <p>Come and finish your tasks, for better future.</p>
          </div>

          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p403x403/148937350_421591552248485_5238614361000657297_n.png?_nc_cat=103&ccb=3&_nc_sid=aee45a&_nc_ohc=nNTqc76SyZkAX-vfLq_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_tp=30&oh=f29d1bce1d284a29da916b8f21a77a4e&oe=604A629D"
            alt="someimage"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
