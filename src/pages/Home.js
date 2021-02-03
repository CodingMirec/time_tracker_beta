import React from "react";
import Sidebar from "../components/Sidebar";
import Tracker from "../components/Tracker";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Tracker />
    </div>
  );
}

export default Home;
