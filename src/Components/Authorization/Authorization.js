import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Authorization.css'
import {Route, Switch} from "react-router-dom";


import Login from "./Login/Login";
import Register from "./Register/Register";

const Authorization = () => {
    return (
        <div className="authorization-container">
            <Switch>
                <Route path="/login/" exact component={Login} />
                <Route path="/register/" exact component={Register} />
            </Switch>
        </div>
    )
};

export default Authorization;