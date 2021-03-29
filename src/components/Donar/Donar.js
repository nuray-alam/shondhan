import React from 'react';
import './Donar.css'
const Donar = ({ donar }) => {
    const { name, Age, Gender, BGroup, Address } = donar;
    const maleImgUrl = `https://i.ibb.co/GV3D5qf/men-Profile.png`;
    const femaleImgUrl = `https://i.ibb.co/xSHJ8CP/female.jpg`;
    let imgUrl = '';
    if (Gender === 'Male' || Gender === 'male') {
        imgUrl = maleImgUrl;
    }
    else {
        imgUrl = femaleImgUrl;
    }
    return (
        <div className='donar'>
            <img src={imgUrl} alt="" />
            <h4>Name: {name}</h4>
            <h5>Age: {Age}</h5>
            <h5>Gender: {Gender}</h5>
            <h5>Blood Group: {BGroup}</h5>
        </div>
    );
};

export default Donar;