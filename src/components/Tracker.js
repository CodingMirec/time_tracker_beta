import React from "react";

import "./Tracker.css";

import ScheduleIcon from "@material-ui/icons/Schedule";
import DehazeIcon from "@material-ui/icons/Dehaze";

function Tracker() {
  return (
    <div className="tracker">
      <div className="container">
        <div className="tracker__top">
          <div className="tracker__left">
            <input
              className="tracker__input"
              type="text"
              placeholder="What are you working on?"
            />
          </div>
          <div className="tracker__right">
            <div className="tracker__projectInfo">
              <button className="tracker__addProject">Add Project</button>
              <span className="tracker__time">00:00:00</span>
              <button className="tracker__button">Add Task</button>
            </div>
            <div className="tracker__projectSettings">
              <ScheduleIcon />
              <DehazeIcon />
            </div>
          </div>
        </div>
        <div className="tracker__week">
          <div className="tracker__day">
            <h3>Day</h3>
            <h4>debugging</h4>
            <h4>creating logo</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracker;
