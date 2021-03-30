import { makeAutoObservable } from "mobx";

class InputMessageState {

    status = 'text'

    constructor() {
        makeAutoObservable(this)
    }


}

export default new InputMessageState();