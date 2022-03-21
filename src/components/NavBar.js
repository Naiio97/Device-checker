import React from 'react'

import logo from '../assets/etnetera-cernobile.svg'

import '../scss/navBar.scss';

const NavBar = () => {
    return(
        <header>
            <div className="bar">
                <img src = {logo} alt="logo" />
                <button className="btn-bar">Přihlásit</button>
            </div>
        </header>
    )
        
        
}   

export default NavBar