import {makeAutoObservable} from "mobx";
import axios from "axios";
import UserState from "../User/UserState";
import Cookies from "js-cookie";

class SettingsState {

    avatarPath = ""
    avatarFile = null

    constructor() {
        makeAutoObservable(this)
    }

    changeFile(element){
        this.avatarPath = element.target.value;
        this.avatarFile = element.target.files[0];

    }

    async changeAvatar() {
        if (this.avatarFile === null) {
            return 0
        }

        let formData = new FormData();
        formData.append("file", this.avatarFile);
        formData.append('login', UserState.login);
        formData.append('password', UserState.password);
        await axios.post('/api/avatar', formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((result) => {
            UserState.avatar = result.data
            if (Cookies.get('login'))
                Cookies.set('avatar', result.data)
            if (sessionStorage.getItem('login'))
                sessionStorage.setItem('avatar', result.data)
        })
    }
}

export default new SettingsState();