import React from 'react'

import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Register from './Register/Register';
import Login from './Login/Login'

const Api = () => {
    return (
        <Switch>
            <Route path="/api/login/" exact component={Login} />
            <Route path="/register/" exact component={Register} />
            <p>api</p>
        </Switch>
        
    )
}

export default Api;