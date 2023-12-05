import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./TableAdmin.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableAdmin = () => {
  const [rows, setRows] = useState([
    {
      id: null,
      OfferName: "",
      bussinessName:"",
      consumer: "",
      date: "",
      status: "",
    },
  ]);
  const url = "http://localhost:8080/api/";
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.log("error fetching data")
      })
  }, []);
  return (
  
       <TableContainer component={Paper} className="table" >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Tracking ID</TableCell>
            <TableCell className="tablecell">Offer </TableCell>
            <TableCell className="tablecell">Business </TableCell>
            <TableCell className="tablecell">Consumer</TableCell>
            <TableCell className="tablecell">Date</TableCell>
            <TableCell className="tablecell">Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              
            >
              <TableCell >
                {row.id}
              </TableCell>
              <TableCell className="tablecell">{row.OfferName}</TableCell>
              <TableCell className="tablecell">{row.bussinessName}</TableCell>
              <TableCell className="tablecell">{row.consumer}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell"><span className={`status ${row.status}`}>
               {row.status} </span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}

export default TableAdmin
