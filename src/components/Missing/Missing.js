import React, { useEffect, useState } from 'react';
import MissingPost from '../MissingPost/MissingPost';
import './Missing.css'
const Missing = () => {
    // creating fakeData
    const sampleMissingPosts = [
        { id: 1, name: 'Md. Nuray Alam Siddik', Age: 22, BGroup: 'O Positive', Gender: 'Male', Description: '1/1 Circular Road, Kalabagan Dhaka -1205', Contact: '017959551153' },
        { id: 2, name: 'Payel Miah', Age: 25, BGroup: 'A Positive', Gender: 'Male', Description: 'Gabtola Road,Maghbazar, Dhaka', Contact: '017959551153' },
        { id: 3, name: 'Md. Rajib Hossain', Age: 27, BGroup: 'B Positive', Gender: 'Male', Description: 'Motejheel, Khilkhet, Dhaka -1205', Contact: '017959551153' },
        { id: 4, name: 'Azmira Sumsee Sristy', Age: 22, BGroup: 'O Negative', Description: 'shutrapur, Dhaka-1005', Contact: '017959551153' },

    ];
    if (localStorage.getItem('missingPosts')) {

    }
    else {
        const missingPosts = JSON.stringify(sampleMissingPosts);
        localStorage.setItem("missingPosts", missingPosts);
    }

    const [savedMissingPosts, setSavedMissingPosts] = useState([]);
    useEffect(() => {
        const textFileOfMissingPosts = localStorage.getItem("missingPosts");

        const newSavedMissingPosts = JSON.parse(textFileOfMissingPosts);
        setSavedMissingPosts(newSavedMissingPosts);
    }, [localStorage.getItem('missingPosts')]);

    const handleCreateButton = () => {
        document.getElementsByClassName('new-missing-post-button')[0].style.display = 'none';
        document.getElementsByClassName('new-post-form')[0].style.display = 'block';
    }

    const handleSubmitButton = () => {
        document.getElementsByClassName('new-missing-post-button')[0].style.display = 'block';
        document.getElementsByClassName('new-post-form')[0].style.display = 'none';
        const newMissingPost = {};
        newMissingPost.id = savedMissingPosts.length;
        newMissingPost.name = document.getElementById('mName').value;
        newMissingPost.Age = document.getElementById('mAge').value;
        newMissingPost.Gender = document.getElementById('mGender').value;
        newMissingPost.BGroup = document.getElementById('mBloodGroup').value;
        newMissingPost.Description = document.getElementById('mDescription').value;
        newMissingPost.Contact = document.getElementById('mContact').value;
        const latestMissingPosts = [...savedMissingPosts, newMissingPost];
        localStorage.setItem("missingPosts", JSON.stringify(latestMissingPosts));
        setSavedMissingPosts(latestMissingPosts);
    }
    return (
        <div>
            <div className="new-missing-post-button">
                <button onClick={() => handleCreateButton()}>Create New Missing Post</button>
            </div>
            <div className="new-post-form">
                <p>Missing Person Name: <input type="text" name="" id="mName" /></p>
                <p>Age: <input type="Number" name="" id="mAge" min='0' /></p>
                <p>Gender <input type="text" name="" id="mGender" /></p>
                <p> Blood Group: <input type="text" id='mBloodGroup' /></p>
                <p>Description: <input type="text" name="" id="mDescription" /></p>
                <p>Contact: <input type="text" name="" id="mContact" /></p>
                <button onClick={() => handleSubmitButton()} id='submit-button'>Submit</button>
            </div>
            <div className="missing-post-section">
                {
                    savedMissingPosts.map(post => <MissingPost post={post}></MissingPost>)
                }
            </div>
        </div>
    );
};

export default Missing;