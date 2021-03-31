import React, { useEffect, useState } from 'react';
import Donar from '../Donar/Donar';
import './Blood.css'
const Blood = () => {
    // creating fakeData
    const sampleDonarData = [
        { id: 1, name: 'Md. Nuray Alam Siddik', Age: 22, BGroup: 'O Positive', Gender: 'Male', Address: '1/1 Circular Road, Kalabagan Dhaka -1205' },
        { id: 2, name: 'Payel Miah', Age: 25, BGroup: 'A Positive', Gender: 'Male', Address: 'Gabtola Road,Maghbazar, Dhaka' },
        { id: 3, name: 'Md. Rajib Hossain', Age: 27, BGroup: 'B Positive', Gender: 'Male', Address: 'Motejheel, Khilkhet, Dhaka -1205' },
        { id: 4, name: 'Azmira Sumsee Sristy', Age: 22, BGroup: 'O Negative', Address: 'shutrapur, Dhaka-1005' },

    ];
    if (localStorage.getItem('donars')) {

    }
    else {
        const donars = JSON.stringify(sampleDonarData);
        localStorage.setItem("donars", donars);
    }

    const [savedDonars, setSavedDonars] = useState([]);

    useEffect(() => {
        const textFileOfDonars = localStorage.getItem("donars");
        // const textFileOfDonars = savedDonars;
        const newSaveDonars = JSON.parse(textFileOfDonars);
        setSavedDonars(newSaveDonars);
    }, []);


    const handleCreateButton = () => {
        document.getElementsByClassName('new-donar-button')[0].style.display = 'none';
        document.getElementsByClassName('donar-form')[0].style.display = 'block';
    }
    const handleSubmitButton = () => {

        document.getElementsByClassName('new-donar-button')[0].style.display = 'block';
        document.getElementsByClassName('donar-form')[0].style.display = 'none';
        const newDonar = {};
        newDonar.id = savedDonars.length;
            newDonar.name = document.getElementById('dName').value;
        newDonar.Age = document.getElementById('dAge').value;
        newDonar.Gender = document.getElementById('dGender').value;
        newDonar.BGroup = document.getElementById('dBloodGroup').value;
        newDonar.Address = document.getElementById('dAddress').value;
        const latestDonars = [...savedDonars, newDonar];
        localStorage.setItem("donars", JSON.stringify(latestDonars));
        setSavedDonars(latestDonars);
    }
    return (
        <div>
            <div className="new-donar-button">
                <button onClick={() => handleCreateButton()}>Create New Donor</button>
            </div>
            <div className="donar-form">
                <p>Name: <input type="text" name="" id="dName" /></p>
                <p>Age: <input type="Number" name="" id="dAge" min='0' /></p>
                <p>Gender <input type="text" name="" id="dGender" /></p>
                <p> Blood Group: <input type="text" id='dBloodGroup' /></p>
                <p>Address: <input type="text" name="" id="dAddress" /></p>
                <button onClick={() => handleSubmitButton()} id='submit-button'>Submit</button>
            </div>
            <div className="donar-section">
                {
                    savedDonars.map(donar => <Donar donar={donar}></Donar>)
                }
            </div>


        </div>
    );
};

export default Blood;