import {makeAutoObservable} from "mobx";

class SettingsState {

    avatarPath = ""
    avatarFile = null

    constructor() {
        makeAutoObservable(this)
    }

    changeFile(element){
        this.avatarPath = element.target.value;
        this.avatarFile = element;
        console.log(this.avatarFile)
    }

    changeAvatar() {

    }
}

export default new SettingsState();