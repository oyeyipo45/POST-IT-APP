import React from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/dashboard_components/main";
import Signup from "./components/signup_components/signup";
import Group from "./components/grouppage_components/Group";
import Signin from './components/signin_components/Signin'


function App() {
  return (
    <div>
      <div className="App">
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Main} />
          <Route path="/group/:id" component={Group} />
          <Route path="/group" component={Group} />
          <Redirect from="/" to="/signin" />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
