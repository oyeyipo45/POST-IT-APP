import React from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Main from "./dashBoard components.js/main";
import Signup from "./signup/signup";
import Group from "./grouppage components/Group";
import Signin from './signin_components/Signin'


function App() {
  return (
    <div>
      <div className="App">
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Main} />
          <Route path="/group" component={Group} />
          <Redirect from="/" to="/signin" />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
