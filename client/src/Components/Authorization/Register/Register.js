import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './Register.css'
import {Link} from "react-router-dom";



const Register = () => {
    return (
        <div className="authorization-block">
            <h1>Sign Up</h1>
            <br/>
            <form method="post" action="/api/user">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Login</label>
                    <input type="text" className="form-control" id="login" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <br/>
                <br/>
            </form>

            <small className="form-text text-muted">Already have account?
                <Link to="/login"> Sign in</Link>
            </small>
        </div>
    )
};

export default Register;