import React from "react";
import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";

import "./Settings.css";

function Settings() {
  return (
    <div className="settings">
      <Sidebar />
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Settings;
