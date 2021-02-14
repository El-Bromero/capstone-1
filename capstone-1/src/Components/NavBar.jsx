import React from 'react'
import './NavBar.css'
import logo from '../Images/romeroscape_logo_crop.png';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
// import EcoIcon from '@material-ui/icons/Eco';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function NavBar() {
    return (
        <nav className="navbar">
            {/* Logo */}
            <Link to ="/">
                <img 
                    className="navbar-logo" 
                    src={logo}
                    alt=""
                />
            </Link>

            {/* Search Box */}

            <div className="navbar-search">
                <input type="text" className="navbar-searchInput"/>
                <SearchIcon className="navbar-searchIcon"/>
            </div>
            {/* Links */}
            <div className="navbar-nav">
                {/* 1st link */}
                <Link to="/login" className="navbar-link">
                    <div className="navbar-option">
                        <span className="navbar-optionLineOne">Hello Brandon,</span>
                        <span className="navbar-optionLineTwo">Sign In</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to="/about-us" className="navbar-link">
                    <div className="navbar-option">
                        <span className="navbar-optionLineOne navbar-optionIcon">
                        {/* <EcoIcon style={{ fontSize: 15 }}/> */}
                        Learn More
                        </span>
                        <span className="navbar-optionLineTwo">About Us</span>
                    </div>
                </Link>

                {/* 3rd link */}
                {/* <Link to="/orders" className="navbar-link">
                    <div className="navbar-option">
                        <span className="navbar-optionLineOne">Your</span>
                        <span className="navbar-optionLineTwo">Orders</span>
                    </div>
                </Link> */}

            </div>
            {/* Cart Icon */}
                <Link to="/checkout" className="navbar-link">
                    <div className="navbar-optionCart">
                        <ShoppingCartIcon/>
                        <span className="navbar-optionLineTwo navbar-cartCount">0</span>
                    </div>
                </Link>
        </nav>
    )
}

export default NavBar;
