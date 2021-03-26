import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from '../../../Store/Actions/UserActions'
import './Register.css'
import {Link} from "react-router-dom";



const Register = ({changeLogin, changeEmail, changePassword}) => {

    return (
        <div className="authorization-block">
            <h1>Sign Up</h1>
            <br/>
            <form method="post">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Login</label>
                    <input type="text" className="form-control" id="login" name = "login" onChange={changeLogin} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="email" name ="email" onChange={changeEmail} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={changePassword} required/>
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


const mapStateProps = (state) => {
    return {
        user: state
    }
}

const mapDispatchProps = (dispatch) => {
    const {changeLogin, changeEmail, changePassword} = bindActionCreators(actions, dispatch)
    return {
        changeLogin: (event) => {
            const login = event.target.value;
            changeLogin(login);
        },
        changeEmail: (event) => {
            const email = event.target.value;
            changeEmail(email);
        },
        changePassword: (event) => {
            const password = event.target.value;
            changePassword(password);
        }
    }
}

export default connect(mapStateProps, mapDispatchProps)(Register);