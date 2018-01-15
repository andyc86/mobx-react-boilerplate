import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import RaisedButton from "material-ui/RaisedButton";

import DefaultModel from "../../models/DefaultModel";
import "./styles.styl";

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
            <div className={"default-sub-component"}>
                <div className={"default-sub-component_text"}>{defaultStore.defaultModel.defaultText}</div>
                <RaisedButton 
                    className={"default-sub-component_button"}
                    onClick={defaultStore.defaultFunction.bind(this,defaultStore.defaultProp)}>
                    Test
                </RaisedButton>
            </div>
        )
    }
}