import React, { useState, useRef } from "react";

import "./Tracker.css";

import ScheduleIcon from "@material-ui/icons/Schedule";
import DehazeIcon from "@material-ui/icons/Dehaze";

function Tracker() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleEnd = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setTimer(0);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

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
              <button className="tracker__addProject">Project</button>
              <span className="tracker__time">{formatTime()}</span>
              {!isActive ? (
                <button className="tracker__startButton" onClick={handleStart}>
                  Start Task
                </button>
              ) : (
                <button className="tracker__endButton" onClick={handleEnd}>
                  End Task
                </button>
              )}
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
