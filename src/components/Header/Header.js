import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="title-section">
                <h1>Shondhan</h1>
            </div>

            <nav>
                <a href="/home">Home</a>
                <a href="/blood_donors">Blood Donors</a>
                <a href="/missing_post">Missing Post</a>
            </nav>
        </div>
    );
};

export default Header;