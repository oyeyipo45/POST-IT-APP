import React from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Main from "./dashBoard components.js/main";
import Signup from "./signup/signup";
import Group from "./grouppage components/Group";


function App() {
  return (
    <div>
      <div className="App">
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Main} />
          <Route path="/group" component={Group} />
          <Redirect from="/" to="/signup" />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
