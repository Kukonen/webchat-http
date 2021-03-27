import { makeAutoObservable } from "mobx";
import axios from "axios";

class LoginState {
    login = null
    password = null

    constructor() {
        makeAutoObservable(this)
    }

    changeLogin (login) {
        this.login = login
    }
    changePassword (password) {
        this.password = password
    }
    async loginFunc () {
        console.log("here")
        await axios.post('/api/login', {
            login: this.login,
            password: this.password
        }).then((response) => {
            console.log(response.data)
        })
    }

}

export default new LoginState();