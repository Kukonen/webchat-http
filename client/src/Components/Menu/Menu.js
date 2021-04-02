import React from "react";
import {GearFill} from "react-bootstrap-icons";
import IsLogged from "../User/IsLogged/IsLogged";
import NoLogged from "../User/NoLogged/NoLogged";
import {observer} from "mobx-react-lite";
import UserState from "../../Store/User/UserState";
import {Link} from "react-router-dom";

import './Menu.css'

const Menu = observer(() => {

    let isLogged = UserState.isLogged;

    return (
        <div className="menu">
            <div className="menu-bar">
                <div className="menu-user-block">
                    {isLogged ? <IsLogged /> : <NoLogged />}
                </div>
            </div>
            <div className="menu-settings" >
                <Link to="/settings"><GearFill className="GearFill" size={70}/></Link>
            </div>
        </div>
    )
});

export default Menu;