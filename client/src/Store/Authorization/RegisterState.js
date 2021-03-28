import { makeAutoObservable } from "mobx";
import axios from "axios";
import UserState from "../User/UserState";
import Cookies from "js-cookie";

class RegisterState {
    login = ""
    email = ""
    password = ""

    loginValid = true
    emailValid = true
    passwordValid = true

    constructor() {
        makeAutoObservable(this)
    }

    changeLogin (login) {
        this.login = login
    }
    changeEmail (email) {
        this.email = email
    }
    changePassword (password) {
        this.password = password
    }

    async registration () {
        let result = ''
        await axios.post('/api/register', {
            login: this.login,
            email: this.email,
            password: this.password
        }).then((response) => {
            result = response.data;
        })
        if (result.error === 'login invalid') {
            this.loginValid = false
            this.emailValid = true
            this.passwordValid = true
        }
        if (result.error === 'email invalid') {
            this.loginValid = true
            this.emailValid = false
            this.passwordValid = true
        }
        if (result.error === 'password invalid') {
            this.loginValid = true
            this.emailValid = true
            this.passwordValid = false
        }
        if (result.error === 'login and email invalid') {
            this.loginValid = false
            this.emailValid = false
            this.passwordValid = true
        }
        if (result.error === 'email and password invalid') {
            this.loginValid = true
            this.emailValid = false
            this.passwordValid = false
        }
        if (result.error === 'login and password invalid') {
            this.loginValid = false
            this.emailValid = true
            this.passwordValid = false
        }
        if (result.error === 'login and email and password invalid') {
            this.loginValid = false
            this.emailValid = false
            this.passwordValid = false
        }
        if (result.error === 'ok') {
            UserState.login = this.login;
            UserState.password = result.data;
            UserState.role = 'user';
            Cookies.set('isLogged', true, { expires: 30});
            Cookies.set('login', this.login, { expires: 30});
            Cookies.set('password', result.data, { expires: 30});
            Cookies.set('role', 'user', { expires: 30});
            window.location = "/"
        }
    }

}

export default new RegisterState();