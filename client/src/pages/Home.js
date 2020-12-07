import React from 'react';
import {Link} from 'react-router-dom';

import orderImg from '../static/img/sandwich.jpg';
import menuImg from '../static/img/menu_cover.jpg';

function Home() {
    return (
        <main class="container-flex m-auto">
        <Link to="/order">
            <div class="home-button grow">
                <img class="main-image" src={orderImg}/>
                <h2>Order Now!</h2>
            </div>
        </Link>
        <Link to="/menu">
            <div class="home-button grow">
                <img class="main-image" src={menuImg}/>
                <h2>Check out the Menu!</h2>
            </div>
        </Link>
        </main>
    )
}

export default Home;