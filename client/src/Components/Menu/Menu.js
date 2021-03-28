import React from "react";
import {GearFill} from "react-bootstrap-icons"
import UserState from "../../Store/User/UserState";
import IsLogged from "../User/IsLogged/IsLogged";
import NoLogged from "../User/NoLogged/NoLogged";
import {observer} from "mobx-react-lite";

import './Menu.css'

const Menu = observer(() => {
    return (
        <div className="menu">
            <div className="menu-bar">
                <div className="menu-user-block">
                    {console.log(UserState.isLogged)}
                    {UserState.isLogged ? <IsLogged /> : <NoLogged />}
                </div>
            </div>
            <div className="menu-settings" >
                <GearFill className="GearFill" size={70}/>
            </div>
        </div>
    )
});

export default Menu;