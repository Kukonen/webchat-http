import {makeAutoObservable} from "mobx";

class User {
    login = '';
    role = '';
    isLogged = true;
    constructor() {
        makeAutoObservable(this);
    }



}

export default User;