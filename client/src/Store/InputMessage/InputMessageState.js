import { makeAutoObservable } from "mobx";
import axios from "axios";
import UserState from "../User/UserState";

class InputMessageState {

    text = ''

    constructor() {
        makeAutoObservable(this)
    }

    changeText (text) {
        this.text = text;
    }

    async sendMessage() {
        if (UserState.isLogged)
        {
            await axios.post('/api/send', {
                login: UserState.login,
                password: UserState.password,
                text: this.text
            }).then(() => {
                this.text = '';
            })
        }

    }

}

export default new InputMessageState();