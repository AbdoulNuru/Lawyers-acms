import React, { Component } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Homepage from "../views/Homepage";
import SignUpForm from "../components/signupComponent";

axios.defaults.baseURL = "http://localhost:3700";

export default class index extends Component {
  render() {
    return (
      <Switch>
        {/* <Route path="/" exact component={Homepage} /> */}
        <Route path="/" exact component={SignUpForm} />
      </Switch>
    );
  }
}
