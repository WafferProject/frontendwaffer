import React from 'react'
import "./TableAdmin.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableAdmin = () => {
  const rows = [
    {
      id: 1143155,
      OfferName: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      consumer: "John Smith",
      date: "1 March",
     
      status: "Approved",
    },
    {
      id: 2235235,
      OfferName: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      consumer: "Michael Doe",
      date: "1 March",
     
      status: "Pending",
    },
    {
      id: 2342353,
      OfferName: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      consumer: "John Smith",
      date: "1 March",
      
      status: "Pending",
    },
    {
      id: 2357741,
      OfferName: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      consumer: "Jane Smith",
      date: "1 March",
     
      status: "Approved",
    },
    {
      id: 2342355,
      OfferName: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      consumer: "Harold Carol",
      date: "1 March",
     
      status: "Pending",
    },
  ];
  return (
  
       <TableContainer component={Paper} className="table" >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Tracking ID</TableCell>
            <TableCell className="tablecell">Offer Name</TableCell>
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
