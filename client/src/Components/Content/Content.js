import React from "react";

import './Content.css'

import {Route} from "react-router-dom";


import Login from "../Authorization/Login/Login";
import Register from "../Authorization/Register/Register";
import Api from "../Api/Api"

import RegisterApi from '../Api/Register/Register';
import LoginApi from '../Api/Login/Login'

const Content = () => {
    return (
        <div className="content">
            <Route path="/login/" exact component={Login} />
            <Route path="/register/" exact component={Register} />
            <Route path="/api/" exact component={Api} />
            <Route path="/api/login/" exact component={LoginApi} />
            <Route path="/api/register/" exact component={RegisterApi} />
        </div>
    )
};

export default Content;