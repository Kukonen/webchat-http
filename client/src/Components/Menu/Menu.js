import React from "react";
import {GearFill} from "react-bootstrap-icons"

import './Menu.css'

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu-bar" />
            <div className="menu-settings" >
                <GearFill className="GearFill" size={70}/>
            </div>
        </div>
    )
};

export default Menu;