import React, { Component } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "../pages/welcome/welcome.page";
import Register from "../pages/auth/registerPage";
import LoginPage from "../pages/auth/loginPage";
import Otp from "../pages/auth/otpPage";
import RecoverPassword from "../pages/auth/recoverPassword";
import RequestVerification from "../pages/auth/requestVerification";

axios.defaults.baseURL = "http://localhost:3700";

export default class index extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/otp" exact component={Otp} />
        <Route path="/forgot-password" exact component={RecoverPassword} />
        <Route
          path="/request-verification"
          exact
          component={RequestVerification}
        />
      </Switch>
    );
  }
}
