import React from "react";

import './Content.css'

import {Route} from "react-router-dom";


import Login from "../Authorization/Login/Login";
import Register from "../Authorization/Register/Register";

const Content = () => {
    return (
        <div className="content">
            <Route path="/login/" exact component={Login} />
            <Route path="/register/" exact component={Register} />
        </div>
    )
};

export default Content;