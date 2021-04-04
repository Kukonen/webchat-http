import { makeAutoObservable } from "mobx";
import axios from "axios";
import UserState from "../User/UserState";

class InputMessageState {

    text = ''

    imageFile = null;

    constructor() {
        makeAutoObservable(this)
    }

    changeText (text) {
        this.text = text;
    }

    changeImg (element) {
        this.imageFile = element.target.files[0];
    }

    async sendMessage() {

        let formData = new FormData();
        formData.append("file", this.imageFile);
        formData.append('login', UserState.login);
        formData.append('password', UserState.password);
        formData.append('text', this.text);

        if (UserState.isLogged && this.text !== '')
        {
            await axios.post('/api/send', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(() => {
                this.text = '';
                this.imageFile = null;
            })
        }

    }

}

export default new InputMessageState();