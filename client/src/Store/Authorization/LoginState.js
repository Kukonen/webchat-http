import { makeAutoObservable } from "mobx";
import axios from "axios";
import UserState from "../User/UserState";
import Cookies from "js-cookie";

class LoginState {
    login = ''
    password = ''

    loginValid = true

    isRemember = false

    constructor() {
        makeAutoObservable(this)
    }

    changeLogin (login) {
        this.login = login
    }
    changePassword (password) {
        this.password = password
    }
    changeRemember (remember) {
        this.isRemember = remember
    }
    async loginFunc () {
        let data = {}
        await axios.post('/api/login', {
            login: this.login,
            password: this.password
        }).then((response) => {
            data = JSON.parse(JSON.stringify(response.data))
        })

        UserState.login = data.login;
        UserState.avatar = data.avatar;
        UserState.password = data.password;
        UserState.role = data.role;
        if (this.isRemember) {
            Cookies.set('isLogged', true, { expires: 30});
            Cookies.set('login', data.login, { expires: 30});
            Cookies.set('avatar', data.avatar, { expires: 30});
            Cookies.set('password', data.password, { expires: 30});
            Cookies.set('role', data.role, { expires: 30});
        } else {
            sessionStorage.setItem('isLogged', true)
            sessionStorage.setItem('login', data.login)
            sessionStorage.setItem('avatar', data.avatar)
            sessionStorage.setItem('password', data.password)
            sessionStorage.setItem('role', data.role)
        }
        window.location = "/"

    }

}

export default new LoginState();