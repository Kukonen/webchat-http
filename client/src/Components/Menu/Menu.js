import React from "react";
import {GearFill} from "react-bootstrap-icons"
import UserState from "../../Store/User/UserState";
import IsLogged from "../User/IsLogged/IsLogged";
import NoLogged from "../User/NoLogged/NoLogged";
import {observer} from "mobx-react-lite";
import Cookies from "js-cookie";

import './Menu.css'

const Menu = observer(() => {

    let isLogged = Cookies.get('isLogged');

    console.log(Cookies.get('isLogged'))
    console.log(Cookies.get('login'))
    console.log(Cookies.get('password'))
    console.log(Cookies.get('role'))


    return (
        <div className="menu">
            <div className="menu-bar">
                <div className="menu-user-block">
                    {isLogged ? <IsLogged /> : <NoLogged />}
                </div>
            </div>
            <div className="menu-settings" >
                <GearFill className="GearFill" size={70}/>
            </div>
        </div>
    )
});

export default Menu;