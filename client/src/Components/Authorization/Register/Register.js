import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'
import {Link} from "react-router-dom";
import Authorization from '../../../Store/Authorization'
import {observer} from 'mobx-react-lite'

const Register = observer(() => {

    return (
        <div className="authorization-block">
            <h1>Sign Up</h1>
            <br/>
            <div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Login</label>
                    <input type="text" className="form-control" id="login" name = "login" required onChange={(event) => Authorization.changeLogin(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="email" name ="email" required onChange={(event) => Authorization.changeEmail(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password" name="password" required onChange={(event) => Authorization.changePassword(event.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <br/>
                <br/>
            </div>

            <small className="form-text text-muted">Already have account?
                <Link to="/login"> Sign in</Link>
            </small>
        </div>
    )
});

export default Register;