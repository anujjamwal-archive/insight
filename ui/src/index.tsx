import * as React from "react";
import * as ReactDom from "react-dom";
import Home from "./pages/home";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/dashboard";

const routing = (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/d/:id" component={Dashboard} />
  </Router>
);

ReactDom.render(routing, document.getElementById("root") as HTMLElement);
