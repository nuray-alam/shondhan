import React from 'react';
import { useHistory } from 'react-router';
import './Home.css'
const Home = () => {
    const history = useHistory();
    const handleClick = (path) => {

            const url = `/${path}`;
            history.push(url)
    }


    return (
        <div className='home'>
            <div onClick={() => handleClick('blood')} className="home-option">
                <h3>See Available Blood Donar</h3>
            </div>
            <div onClick={() => handleClick('missing')} className="home-option">
                <h3>See Missing Post</h3>
            </div>
        </div>
    );
};

export default Home;