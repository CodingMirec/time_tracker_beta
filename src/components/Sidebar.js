import React from "react";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <h1>Tracker</h1>
      </div>
      <div className="sidebar__nav">
        <div className="sidebar__link">
          <h2>Time Tracker</h2>
        </div>
        <div className="sidebar__link">
          <h2>Projects</h2>
        </div>
        <div className="sidebar__link">
          <h2>Teams</h2>
        </div>
        <div className="sidebar__link">
          <h2>Settings</h2>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
