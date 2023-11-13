import React from "react";
import { useState } from "react";
import { FormControl, Select, Option, FormLabel,  Button } from "@mui/joy";
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import { Paper } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";

export default function Filter() {
  const [recentFilter, setRecentFilter] = useState(null);


  return (
    <Paper
      style={{
        display: "flex",
        justifyContent: "space-around",
        borderRadius: "20px",
        width: "70%",
        marginTop: "70px",
        margin: "auto",
        height:'80px',
        backgroundColor:'#FBFAF5',
        paddingLeft:'40px',
        paddingRight:'20px'
        
      }}
      component={'div'}
    >
       <FormControl
        size="md"
        sx={{  width: "350px" }}
      >
        <FormLabel size="sm">Category</FormLabel>
        <Select size="sm" placeholder="All">
          <Option value="all">All</Option>
          <Option value="food">Food</Option>
          <Option value="Groceries">Groceries</Option>
          <Option value="Pastry">Pastry</Option>
        </Select>
      </FormControl>

      <FormControl size="md" sx={{ width: "120px",  }}>
        <FormLabel size="sm">Distance</FormLabel>
        <Select
          size="sm"
          placeholder="All"
          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
        >
          <Option value="Nearby">Nearby</Option>
          <Option value="all">All</Option>
          
        </Select>
      </FormControl>
      
     


      <FormControl
        size="md"
        sx={{ width: "120px", }}
      >
        <FormLabel>recent</FormLabel>
        <Button variant="outlined" onClick={()=>{setRecentFilter(!recentFilter)}} color="neutral" endDecorator={recentFilter?<ArrowUpward/>:<ArrowDownward/>}>
      
        </Button>
       
      </FormControl>

      <div style={{ display: "flex", flexDirection: "column"  }}>

        <FormLabel size="sm">Price </FormLabel>

        
      </div>
    </Paper>
  );
}
