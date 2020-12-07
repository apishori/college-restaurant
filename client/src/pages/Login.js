import React from 'react'

import loginImg from '../static/img/sandwich2.jpg';

function Login() {
    // if logged in then redirect to home, use auth user

    return (
        <main className="main container-flex">
            <div className="container container-flex">
                <img className="main-image" src={loginImg} alt="login"/>
                <form method="POST">
                    <div className="container-flex2">
                        <h2> Admin Log In</h2>
                        <p>Username</p>
                        <input></input>
                        <p>Password</p>
                        <input></input>
                        <button className="primary-btn" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login;