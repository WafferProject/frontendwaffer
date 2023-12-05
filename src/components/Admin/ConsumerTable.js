import React from 'react'
import "./ConsumerTable.css"
import { DataGrid } from '@mui/x-data-grid';

import { useState } from "react";
const ConsumerTable = () => {

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
        { field: 'firstName', headerName: 'First name', width: 260 },
        { field: 'lastName', headerName: 'Last name', width: 260 },
        { field: 'email', headerName: 'Email', width: 260 },
       
        
      ];
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', email: "1snow@gmail.com"},
        { id: 2, lastName: 'Lannister', firstName: 'Cersei',email: "2snow@gmail.com"},
        { id: 3, lastName: 'Lannister', firstName: 'Jaime',email: "3snow@gmail.com"},
        { id: 4, lastName: 'Stark', firstName: 'Arya',email: "5snow@gmail.com", },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',email: "6snow@gmail.com", },
        { id: 6, lastName: 'Melisandre', firstName: 'eya', email: "7snow@gmail.com", },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara',email: "8snow@gmail.com",},
        { id: 8, lastName: 'Frances', firstName: 'Rossini', email: "9snow@gmail.com", },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey',email: "10snow@gmail.com",},
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

export default ConsumerTable
