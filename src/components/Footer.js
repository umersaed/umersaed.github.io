import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            &copy;{new Date().getFullYear()}&nbsp;Umer Saeed
        </div>
    )
}

export default Footer;
