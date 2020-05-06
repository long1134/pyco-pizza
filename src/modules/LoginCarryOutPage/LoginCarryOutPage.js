import React from 'react';
import LoginPage from "../LoginPage/LoginPageContainer"
import "./LoginCarryOutPage.scss"

function LoginCarryOutPage(props) {
    return (
        <div className="container">
            <LoginPage type="login-carry-out" {...props} />
        </div>
    );
}

export default LoginCarryOutPage;
