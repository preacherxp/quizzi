import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./Main.scss";
import Navbar from "./components/Navbar";
import { CreateQuiz } from "./views/CreateQuiz";
import Discover from "./views/Discover";
import MyQuizes from "./views/MyQuizes";
import Dashboard from "./views/Dashboard";

function Main() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/discover">
            <Discover />
          </Route>
          <Route path="/create">
            <CreateQuiz />
          </Route>
          <Route path="/my-quizes">
            <MyQuizes />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
