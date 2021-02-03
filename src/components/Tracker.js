import React from "react";

import "./Tracker.css";

function Tracker() {
  return (
    <div className="tracker">
      <div className="container">
        <div className="tracker__top">
          <h3>What are you working on?</h3>
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
