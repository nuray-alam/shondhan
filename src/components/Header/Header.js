import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h1>Shondhan</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/blood">Blood</a>
                <a href="/missing">Missing Post</a>
            </nav>
        </div>
    );
};

export default Header;