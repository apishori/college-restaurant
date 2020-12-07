import React from 'react';
import {Link} from 'react-router-dom';

import orderImg from '../static/img/sandwich.jpg';
import menuImg from '../static/img/menu_cover.jpg';

function Home() {
    return (
        <div className="main container-flex">
            <main class="container-flex m-auto">
                <Link to="/order">
                    <div className="home-button grow">
                        <img className="main-image" src={orderImg} alt="order"/>
                        <h2>Order Now!</h2>
                    </div>
                </Link>
                <Link to="/menu">
                    <div className="home-button grow">
                        <img className="main-image" src={menuImg} alt="menu"/>
                        <h2>Check out the Menu!</h2>
                    </div>
                </Link>
            </main>
        </div>
    )
}

export default Home;