import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Home />
          </Route>
          <Route path="/signup">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
