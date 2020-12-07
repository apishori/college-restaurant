import React from 'react'

import menuImg from '../static/img/menu.jpg';

function Menu() {
    return (
        <main className="main container-flex m-auto">
            <img className="menu-image" src={menuImg} alt="menu"/>
        </main>
    )
}

export default Menu;