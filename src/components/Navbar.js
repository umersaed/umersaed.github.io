import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">Umer Saeed</div>
            <div className="navbar__list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Events</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
