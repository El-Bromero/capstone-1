import React from 'react'
import './NavBar.css'
import logo from '../Images/romeroscape_logo_crop.png';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar">
            {/* Logo */}
            <Link exact path ="/">
                <img 
                    className="navbar-logo" 
                    src={logo}
                    alt=""
                />
            </Link>

            {/* Search Box */}

            <input type="text" className="navbar-searchInput"/>

            {/* Links */}

            {/* Cart Icon */}

        </nav>
    )
}

export default NavBar;
