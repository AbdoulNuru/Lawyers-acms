import React, { Component } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Register from "../pages/auth/register";

axios.default.baseURL = "";

export default class index extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Register} />
      </Switch>
    );
  }
}
