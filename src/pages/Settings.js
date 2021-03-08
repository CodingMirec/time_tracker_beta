import React from "react";
import { useHistory } from "react-router-dom";

import Sidebar from "../components/Sidebar";

import "./Settings.css";

function Settings() {
  const history = useHistory();

  const logOut = (e) => {
    e.preventDefault();

    // some logout magic
    history.push("/login");
  };

  return (
    <div className="settings">
      <Sidebar />
      <div className="settings__container">
        <div className="user__info">
          <img
            className="user__photo"
            src="https://avatars.dicebear.com/api/avataaars/.svg"
            alt="avatar"
          />
          <div className="user__details">
            <h2 className="user__name">Miroslav Sykora</h2>
            <span className="user__mail">some@mail.com</span>
          </div>

          <button className="logOut" onClick={logOut}>
            Log Out
          </button>
        </div>
        <div className="account__settings">some acc settings</div>
      </div>
    </div>
  );
}

export default Settings;
