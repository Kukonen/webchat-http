import { makeAutoObservable } from "mobx";
import axios from "axios";

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
            console.log(response.data)
        })

        if (result === 'ok') {
            this.loginValid = true
            this.emailValid = true
            this.passwordValid = true
        }
        if (result === 'login invalid') {
            this.loginValid = false
            this.emailValid = true
            this.passwordValid = true
        }
        if (result === 'email invalid') {
            this.loginValid = true
            this.emailValid = false
            this.passwordValid = true
        }
        if (result === 'password invalid') {
            this.loginValid = true
            this.emailValid = true
            this.passwordValid = false
        }
        if (result === 'login and email invalid') {
            this.loginValid = false
            this.emailValid = false
            this.passwordValid = true
        }
        if (result === 'email and password invalid') {
            this.loginValid = true
            this.emailValid = false
            this.passwordValid = false
        }
        if (result === 'login and password invalid') {
            this.loginValid = false
            this.emailValid = true
            this.passwordValid = false
        }
        if (result === 'login and email and password invalid') {
            this.loginValid = false
            this.emailValid = false
            this.passwordValid = false
        }
    }

}

export default new RegisterState();