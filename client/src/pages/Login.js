import React from 'react'

import loginImg from '../static/img/sandwich2.jpg';

function Login() {
    // if logged in then redirect to home, use auth user

    return (
        <div class="container container-flex">
            <img class="main-image" src={loginImg} alt="login"/>
            <form method="POST">
                <div class="container-flex2">
                    <h2> Admin Log In</h2>
                    <p>Username</p>
                    <input></input>
                    <p>Password</p>
                    <input></input>
                    <button class="primary-btn" type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;