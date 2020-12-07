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
            <header className="header">
                <nav className="container-flex">
                    <div className="container-flex">
                        <Link className="m-0" to="/"><img className="logo" src={logo} alt="Logo"/></Link>
                        <Link className="m-0" to="/"><h2 className="title">Uniwhich</h2></Link>
                    </div>
                    <div className="navbar">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/menu">Menu</Link>
                        {false ? <Link to="">Logout</Link> : <Link to="/login">Login (Admin Only)</Link>}
                    </div>
                </nav>
            </header>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/order" component={Order} />
            </Switch>

            <footer className="footer container-flex">
                <h2>Contact Us</h2>
                <div className="contact-us container-flex container-space-between">
                    <p><i className="fas fa-phone-alt"></i> (425)-270-0260</p>
                    <p><i className="fas fa-envelope"></i> pishori@usc.edu</p>
                </div>
            </footer>
        </Router>
    );
}

export default App;