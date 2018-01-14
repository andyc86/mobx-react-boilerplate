import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer, Provider } from "mobx-react";

import DefaultSubComponent from "./sub-components/DefaultSubComponent";

import DefaultStore from "../stores/DefaultStore";
let store = new DefaultStore();

@observer
export default class DefaultComponent extends Component {
    render() {
        return (
            <Provider defaultStore={store}>
                <DefaultSubComponent />
            </Provider>
        )
    }
}