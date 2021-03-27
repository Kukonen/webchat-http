import { makeAutoObservable } from "mobx";
import axios from "axios";

class User {
    login = null
    email = null
    password = null

    loginValid = true
    emailValid = true

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
        if (result === 'login and email coincidence') {
            this.loginValid = false
            this.emailValid = false
        }
        if (result === 'login coincidence') {
            this.loginValid = false
            this.emailValid = true
        }
        if (result === 'email coincidence') {
            this.loginValid = true
            this.emailValid = false
        }
        if (result === 'ok') {
            this.loginValid = true
            this.emailValid = true
        }
    }

}

export default new User();