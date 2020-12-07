import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import logo from './static/img/logo.png';

import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Order from './pages/Order';

function App() {
    return (
        <Router>
            <header class="header">
                <nav class="container-flex">
                    <div class="container-flex">
                        <Link class="m-0" to="/"><img class="logo" src={logo} alt="Logo"/></Link>
                        <Link class="m-0" to="/"><h2 class="title">Uniwhich</h2></Link>
                    </div>
                    <div class="navbar">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/menu">Menu</Link>
                        {false ? <Link to="">Logout</Link> : <Link to="/login">Login (Admin Only)</Link>}
                    </div>
                </nav>
            </header>

            <div class="main container-flex">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/menu" component={Menu} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/order" component={Order} />
                </Switch>
            </div>

            <footer class="footer container-flex">
                <h2>Contact Us</h2>
                <div class="contact-us container-flex container-space-between">
                    <p><i class="fas fa-phone-alt"></i> (425)-270-0260</p>
                    <p><i class="fas fa-envelope"></i> pishori@usc.edu</p>
                </div>
            </footer>
        </Router>
    );
}

export default App;