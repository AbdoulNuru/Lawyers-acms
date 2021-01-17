import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../views/Homepage";

export default class index extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    );
  }
}
