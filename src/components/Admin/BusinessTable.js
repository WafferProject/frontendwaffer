import React from 'react'

import { DataGrid } from '@mui/x-data-grid';

import { useState } from "react";
const BusinessTable = () => {

    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 260,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                 <div className="viewButton">View</div>
                 <div className="deleteButton"   onClick={() => handleDelete(params.row.id)}>Delete</div>
                 </div>
        );
      },
    },
  ];
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
  return (
    <div className="ConsumerTable">
    
      <DataGrid
        rows={data}
        columns={columns.concat(actionColumn)}
        
          
        initialState={{
            pagination: {
              paginationModel: { pageSize: 9 },
            },
          }}
          pageSizeOptions={[9]}
        checkboxSelection
      />
  
    </div>
  )
}

export default BusinessTable
