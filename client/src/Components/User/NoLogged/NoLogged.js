import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const NoLogged = () => {
    return (
        <div>
            <h5>Hello, guest!</h5>
            <a href="/register">Sign Up</a>
            <p style={{display: "inline"}}>&#160;|&#160;</p>
            <a href="/login">Sign in</a>
        </div>
    )
}

export default NoLogged;