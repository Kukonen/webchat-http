import React from "react";
import Cookies from "js-cookie";
import './IsLogged.css'
import UserState from "../../../Store/User/UserState";



const IsLogged = () => {
    return (
        <div>
            {UserState.avatar !== null ? avatarImg() : <span>no avatar</span>}
            <br/>
            <span className="IsLogged-username" style={UserState.login.length < 9 ? {fontSize: '20px'} :
                UserState.login.length < 11 ? {fontSize: '16px'} :
                    UserState.login.length < 12 ? {fontSize: '14px'} :
                        UserState.login.length < 13 ? {fontSize: '13px'} :
                            {fontSize: '12px'}}>{UserState.login}</span>
            <br/>
            <a href="/" onClick={() => loggout()}>Sign out</a>
        </div>
    )
};

const avatarImg = () => {
    const avatarPath = "http://localhost:3030/" + UserState.avatar;
    return (<img className="IsLogged-avatar-image" src={avatarPath} alt="avatar"/>)
}

const loggout = () => {
    Cookies.remove('login');
    Cookies.remove('avatar');
    Cookies.remove('password');
    Cookies.remove('isLogged');
    Cookies.remove('role');
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('avatar');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('isLogged');
    sessionStorage.removeItem('role');
}

export default IsLogged;