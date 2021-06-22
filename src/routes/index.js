import React, { Component } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "../pages/welcome/welcome.page";
import Register from "../pages/auth/registerPage";
import LoginPage from "../pages/auth/loginPage";
import RecoverPassword from "../pages/auth/recoverPassword";

axios.defaults.baseURL = "http://localhost:3700";

export default class index extends Component {
  render() {
    return (
      <Switch>
        {/* <Route path="/" exact component={Homepage} /> */}
        <Route path="/" exact component={WelcomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/forgot-password" exact component={RecoverPassword} />
        <Route path="/register" exact component={Register} />
      </Switch>
    );
  }
}
