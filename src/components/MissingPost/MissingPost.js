import React from 'react';
import './MissingPost.css'
const MissingPost = ({post}) => {

    const { name, Age, Gender, BGroup, Contact,Description } = post;
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
        <div className='missing-post'>
             <img src={imgUrl} alt="" />
            <h4>Missing Person Name: {name}</h4>
            <h5>Age: {Age}</h5>
            <h5>Gender: {Gender}</h5>
            <h5>Blood Group: {BGroup}</h5>
            <h1>Contact: {Contact}</h1>
            <h5>Description: {Description}</h5>
        </div>
    );
};

export default MissingPost;