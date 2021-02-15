import React, { useState } from 'react';
import './NavBar.css';
import logo from '../Images/romeroscape_logo_crop.png';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';

import inventory from '../Data/inventory.json';
import Product from './Product';

function NavBar() {
    
    const [{ cart }] = useStateValue();

    const [searchTerm, setSearchTerm] = useState("");
    
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
                <input 
                    type="text" 
                    className="navbar-searchInput"
                    list="names"
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                {/* FILTER RESULTS */}
                {inventory.filter((val)=> {
                    if (searchTerm === "") {
                        return val;
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
    
                }).map((val, key) => {
                    if(searchTerm === "")
                    {
                        return;
                    }
                    return (
                        <div className="navbar-item-name" key={key}>
                            <Product 
                                name={val.name} 
                                serialNumber={val.serialNumber} 
                                price={val.price} 
                                category={val.category} 
                                quantity={val.quantity} 
                                productImage={val.productImage}
                            />
                            {/* <button>{val.name}</button> */}
                            <datalist id="names">
                                {inventory.map((val, key) => {
                                    return <option value={val.name}/>
                                })}
                            </datalist>
                        </div>
                    )
                })
                }
                <SearchIcon className="navbar-searchIcon"/>
            </div>
            {/* Links */}
            <div className="navbar-nav">
                {/* 1st link */}
                {/* <Link to="/login" className="navbar-link">
                    <div className="navbar-option">
                        <span className="navbar-optionLineOne">Hello Brandon,</span>
                        <span className="navbar-optionLineTwo">Sign In</span>
                    </div>
                </Link> */}

                {/* 2nd link */}
                <Link to="/about-us" className="navbar-link">
                    <div className="navbar-option">
                        <span className="navbar-optionLineOne navbar-optionIcon">
                        Learn More
                        </span>
                        <span className="navbar-optionLineTwo">About Us</span>
                    </div>
                </Link>

            </div>
            {/* Cart Icon */}
                <Link to="/checkout" className="navbar-link">
                    <div className="navbar-optionCart">
                        <ShoppingCartIcon/>
                        <span className="navbar-optionLineTwo navbar-cartCount">{cart?.length}</span>
                    </div>
                </Link>
        </nav>
    )
}

export default NavBar;
