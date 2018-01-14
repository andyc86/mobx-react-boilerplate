import { observable } from "mobx"

export default class DefaultModel {
    @observable defaultText

    constructor(props) {
        this.defaultText = "This is some default text"
    }
}