import {makeAutoObservable} from "mobx";

class User {
    login = '';
    password = '';
    role = '';
    isLogged = false;
    constructor() {
        makeAutoObservable(this);
    }

    

}

export default new User();