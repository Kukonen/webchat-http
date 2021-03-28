import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'
import {Link} from "react-router-dom";
import RegisterState from '../../../Store/Authorization/RegisterState'
import {observer} from 'mobx-react-lite'

const Register = observer(() => {

    return (
        <div className="authorization-block">
            <h1>Sign Up</h1>
            <br/>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Login</label>
                    <input type="text" className={RegisterState.loginValid ? "form-control" : "form-control is-invalid"} id="login" name = "login" required onChange={(event) => RegisterState.changeLogin(event.target.value)}/>
                    <div className="invalid-feedback">
                        login is not correct.
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className={RegisterState.emailValid ? "form-control" : "form-control is-invalid"} id="email" name ="email" required onChange={(event) => RegisterState.changeEmail(event.target.value)}/>
                    <div className="invalid-feedback">
                        email is not correct.
                    </div>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className={RegisterState.passwordValid ? "form-control" : "form-control is-invalid"} id="password" name="password" required onChange={(event) => RegisterState.changePassword(event.target.value)}/>
                    <div className="invalid-feedback">
                        password is not correct.
                    </div>
                </div>

                <input type="button" className="btn btn-primary" onClick={()=> RegisterState.registration()} value="Register"/>
                <br/>
                <br/>
            </form>

            <small className="form-text text-muted">Already have account?
                <Link to="/login"> Sign in</Link>
            </small>
        </div>
    )
});

export default Register;