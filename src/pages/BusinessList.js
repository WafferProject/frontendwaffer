
import Sidebar from '../components/Admin/SideBar'
import "./BusinessList.css"

import Table from '../components/Admin/Table'
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';


const BusinessList = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'BusinessName', headerName: 'Business Name', width: 260 },
    { field: 'email', headerName: 'Email', width: 260 },
    { field: 'OffersNumber', headerName: 'Numbers Of Offers', width: 260 },
   
    
  ];
  const rows = [
    { id: 1, BusinessName: 'Snow', email: "1snow@gmail.com", OffersNumber:30},
    { id: 2, BusinessName: 'Lannister', email: "2snow@gmail.com",OffersNumber:30},
    { id: 3, BusinessName: 'Lannister', email: "3snow@gmail.com",OffersNumber:40},
    { id: 4, BusinessName: 'Stark',email: "5snow@gmail.com", OffersNumber:50},
    { id: 5, BusinessName: 'Targaryen', email: "6snow@gmail.com",OffersNumber:60 },
    { id: 6, BusinessName: 'Melisandre', email: "7snow@gmail.com",OffersNumber:70 },
    { id: 7, BusinessName: 'Clifford', email: "8snow@gmail.com",OffersNumber:80},
    { id: 8, BusinessName: 'Frances',  email: "9snow@gmail.com", OffersNumber:90},
    { id: 9, BusinessName: 'Roxie',email: "10snow@gmail.com",OffersNumber:20},
  ];
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const navigate = useNavigate();
  return (
    <div className="listConsumer">
      <Sidebar/>
      
      <div className="listContainerConsumer">
        
        <h1 className="headerConsumer">List of Businesses</h1>
        <button className="addButton" onClick={() => navigate('/new')}>Create New</button>
        <Table columns={columns} rows={data} handleDelete={handleDelete}/>
      </div>
    </div>
  )
}

export default BusinessList
