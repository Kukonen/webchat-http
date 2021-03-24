import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import {Link} from "react-router-dom";


const Login = () => {
    return (
        <div className="authorization-block">
            <h1>Sign In</h1>
            <br/>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email or login</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <br/>
                <br/>
            </form>
            <small className="form-text text-muted">Don't have account?
                <Link to="/register"> Sign up</Link>
            </small>
        </div>
    )
};

export default Login;