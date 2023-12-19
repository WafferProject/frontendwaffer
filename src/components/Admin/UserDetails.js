import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from './SideBar.js';
import Chart from './Chart.js';
import "./UserDetails.css";

const mockData = {
    business: {
        image:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        name: "Business Name",
        email: "business@example.com",
        phone: "+123456789",
        address: "123 Business St."
    },
    consumer: {
        image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        name: "Consumer Name",
        email: "consumer@example.com",
        phone: "+987654321",
        address: "321 Consumer Ave."
    }
};
const UserDetails = ({ userType }) => {
    const { id } = useParams();
    const [userData, setUserData] = useState(mockData[userType]);


   


    return (
        <div className="single">
            <SideBar />
            <div className="singleContainer">
                <div className="singleTop">
                    <div className="singleLeft">
                        <div className="editButton">Edit</div>
                        <h1 className="titleSingle">{userType === 'business' ? 'Business Details' : 'Consumer Details'}</h1>
                        <div className="singleItem">
                            <img src={userData.image} alt="" className="itemImg" />
                            <div className="singleDetails">
                                <h1 className="itemTitle">{userData.name}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">{userData.email}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">{userData.phone}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">{userData.address}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="singleRight">
                        <Chart aspect={3 / 1} title={`User Spending (${userType === 'business' ? 'Business' : 'Consumer'})`} />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default UserDetails;
