import React from "react";
import { Switch, Route } from "react-router-dom";

import DefaultComponent from "./components/DefaultComponent";
import DefaultComponent2 from "./components/DefaultComponent2";

export default (
    <Switch>
        <Route exact path="/" component={DefaultComponent}/>
        <Route path="/default" component={DefaultComponent2} />
    </Switch>
)