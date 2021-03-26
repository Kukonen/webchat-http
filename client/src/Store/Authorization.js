import { makeAutoObservable } from "mobx";

class Authorization {
    id = null
    login = null
    email = null
    password = null
    role = null

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

}

export default new Authorization();