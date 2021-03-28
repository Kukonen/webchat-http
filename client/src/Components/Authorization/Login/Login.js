import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import {Link} from "react-router-dom";
import LoginState from "../../../Store/Authorization/LoginState";
import {observer} from "mobx-react-lite";


const Login = observer(() => {
    return (
        <div className="authorization-block">
            <h1>Sign In</h1>
            <br/>
            <div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Login</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={(event) => LoginState.changeLogin(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" required onChange={(event) => LoginState.changePassword(event.target.value)} />
                </div>
                {/*<div className="form-group form-check">*/}
                {/*    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={(event) => LoginState.changeRemember(event.target.checked)}/>*/}
                {/*        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>*/}
                {/*</div>*/}
                <input type="button" className="btn btn-primary" onClick={()=> LoginState.loginFunc()} value="Login" />
                <br/>
                <br/>
            </div>
            <small className="form-text text-muted">Don't have account?
                <Link to="/register"> Sign up</Link>
            </small>
            <p>{LoginState.login}</p>
            <p>{LoginState.password}</p>
        </div>
    )
});

export default Login;