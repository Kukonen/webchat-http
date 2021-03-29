import React from "react";
import Cookies from "js-cookie";

import UserState from "../../../Store/User/UserState";

const IsLogged = () => {
    return (
        <div>
            <h5>Hello, <span style={{color: '#2f47bd'}}>{UserState.login}</span></h5>
            <a href="/" onClick={() => loggout()}>Sign out</a>
        </div>
    )
};

const loggout = () => {
    Cookies.remove('login');
    Cookies.remove('password');
    Cookies.remove('isLogged');
    Cookies.remove('role');
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('isLogged');
    sessionStorage.removeItem('role');
}

export default IsLogged;