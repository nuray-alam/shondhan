import React, { useEffect, useState } from 'react';
import Donar from '../Donar/Donar';
import './Blood.css'
const Blood = () => {

    const sampleDonarData = [
        { id: 1, name: 'Md. Nuray Alam Siddik', Age: 22, BGroup: 'O Positive', Gender: 'Male', Address: '1/1 Circular Road, Kalabagan Dhaka -1205' },
        { id: 2, name: 'Payel Miah', Age: 25, BGroup: 'A Positive', Gender: 'Male', Address: 'Gabtola Road,Maghbazar, Dhaka' },
        { id: 3, name: 'Md. Rajib Hossain', Age: 27, BGroup: 'B Positive', Gender: 'Male', Address: 'Motejheel, Khilkhet, Dhaka -1205' },
        { id: 4, name: 'Azmira Sumsee Sristy', Age: 22, BGroup: 'O Negative', Address: 'shutrapur, Dhaka-1005' },

    ];
    const donars = JSON.stringify(sampleDonarData);
    localStorage.setItem("donars", donars);

    const [savedDonars, setSavedDonars] = useState([]);
    useEffect(() => {
       const textFileOfDonars = localStorage.getItem("donars");
        const newSaveDonars = JSON.parse(textFileOfDonars);
        setSavedDonars(newSaveDonars);
}, [savedDonars]);

    return (
        <div>
            <div className="new-donar-button">
                <button>Create New Donar</button>
                </div>
                <div className="donar-section">
                {
                    savedDonars.map(donar => <Donar donar = {donar}></Donar>)
                }
                </div>
               
         
        </div>
    );
};

export default Blood;