import React from "react";
import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";

import "./Settings.css";

function Settings() {
  return (
    <div className="settings">
      <Sidebar />
      <Link to="/login">logout</Link>
      <div className="settings__side">
        <div className="account__info">
          <div className="account__photo"></div>
        </div>
        <div className="account__settings">some acc settings</div>
      </div>
    </div>
  );
}

export default Settings;
