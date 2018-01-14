import React from "react";
import { render } from "react-dom";
import { BrowserRouter, browserHistory } from "react-router-dom";
import DevTools from "mobx-react-devtools";

import Routes from "./routes";

import DefaultComponent from "./components/DefaultComponent";
import DefaultComponent2 from "./components/DefaultComponent2";

render((
  <BrowserRouter history={browserHistory}>
    {Routes}
  </BrowserRouter>
),  document.getElementById("root"));
