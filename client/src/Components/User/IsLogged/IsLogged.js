import React from "react";
import Cookies from "js-cookie";

const IsLogged = () => {
    return (
        <div>
            <br/>
            <p>Hello, <strong>{Cookies.get('login')}</strong></p>
            <a href="/" onClick={() => loggout()}>Sign out</a>
        </div>
    )
}

const loggout = () => {
    Cookies.remove('login');
    Cookies.remove('password');
    Cookies.remove('isLogged');
    Cookies.remove('role');
}

export default IsLogged;