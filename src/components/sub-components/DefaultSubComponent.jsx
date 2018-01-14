import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";

import DefaultModel from "../../models/DefaultModel";

@inject("defaultStore")
@observer
export default class DefaultSubComponent extends Component {
    constructor(props) {
        super(props)
        props.defaultStore.defaultModel = new DefaultModel()
    }
    render() {
        let { defaultStore } = this.props;
        return (
            <div>
                {defaultStore.defaultModel.defaultText}
                <br />
                <button 
                    onClick={defaultStore.defaultFunction.bind(this,defaultStore.defaultProp)}>
                    Button
                </button>
            </div>
        )
    }
}