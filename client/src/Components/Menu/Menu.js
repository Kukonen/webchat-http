import React from "react";
import {GearFill} from "react-bootstrap-icons";
import IsLogged from "../User/IsLogged/IsLogged";
import NoLogged from "../User/NoLogged/NoLogged";
import {observer} from "mobx-react-lite";
import Cookies from "js-cookie";

import './Menu.css'

const Menu = observer(() => {

    let isLogged = Cookies.get('isLogged') ? true : sessionStorage.getItem('isLogged') ? true : false


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