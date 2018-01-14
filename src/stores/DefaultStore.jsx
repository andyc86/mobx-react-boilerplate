import React, { Component } from "react";
import { observable, computed, action } from "mobx";

export default class defaultStore {
    @observable defaultProp = "Hello This Is A Default";
    @observable defaultModel;

    @action
    defaultFunction(value) {
        alert(value);
    }
};