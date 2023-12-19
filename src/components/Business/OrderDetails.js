
import Modal from '@mui/joy/Modal';
import { Button } from '@mui/joy';
import "./OrderDetails.css"
import {  CloseOutlined } from "@mui/icons-material";
import OrderTable from './OrderTable';
import React, { useState, useEffect } from 'react';

const OrderDetails = ({ handleClose }) => {
  const initialRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', QuantityOrdered: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', QuantityOrdered: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', QuantityOrdered: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', QuantityOrdered: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', QuantityOrdered: null },
    { id: 6, lastName: 'Melisandre', firstName: null, QuantityOrdered: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', QuantityOrdered: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', QuantityOrdered: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', QuantityOrdered: 65 },
  ];
 
  const [rows, setRows] = useState(() => {

    const savedRows = localStorage.getItem('rows');
    return savedRows ? JSON.parse(savedRows) : initialRows;
  });
  useEffect(() => {
    localStorage.setItem('rows', JSON.stringify(rows));
  }, [rows]);

  const handleDeleteRow = (id) => {
    
    setRows(rows.map(row => row.id === id ? { ...row, selected: !row.selected } : row));
  };
  
  const selectedRows = rows.filter(row => row.selected).map(row => row.id);

  return (
    <Modal open={true} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} closeAfterTransition>

  <div>
    <div onClick={(e) => e.stopPropagation()} className="order-details-content">
      
      <div className="title">
        <p>Order Details</p>     
         </div>
         <OrderTable rows={rows} onDeleteRow={handleDeleteRow} selectedRows={selectedRows}/>


    
     
      <div className="close">
              <CloseOutlined
                onClick={handleClose}
              />
            </div>
    </div>
  </div>
</Modal>

  );
};

export default OrderDetails;
