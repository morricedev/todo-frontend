import React from "react";
import { Route, Switch, Redirect } from "react-router";

import Todo from "./todo/Todo";
import About from "./about/About";

const Routes = () => (
  <Switch>
    <Route exact path="/todos" component={Todo} />
    <Route exact path="/about" component={About} />
    <Redirect from="*" to="/todos" />
  </Switch>
);

export default Routes;
