import React from "react";
import { useState } from "react";
import { FormControl, Select, Option, FormLabel, Button } from "@mui/joy";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import { IconButton, Paper } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import SortIcon from "@mui/icons-material/Sort";
import FilterListOffIcon from '@mui/icons-material/FilterListOff';

export default function Filter() {
  const [dateFilter, setDateFilter] = useState(null);
  const [distanceFilter, setDistanceFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);
  const [categoryFilter , setCategoryFilter] = useState("all");

  return (
    <Paper
      style={{
        display: "flex",
        justifyContent: "space-around",
        borderRadius: "20px",
        width: "70%",
        margin: " auto",
        height: "80px",
        backgroundColor: "#FBFAF5",
        paddingLeft: "35px",
        paddingRight: "20px",
      }}
      component={"div"}
    >
      <FormControl size="md" sx={{ width: "350px", marginRight: "40px" }}>
        <FormLabel size="sm">Category</FormLabel>
        <Select size="sm" placeholder="All" onChange={(value)=>{setCategoryFilter(value)}}>
          <Option value="all" >All</Option>
          <Option value="food">Food</Option>
          <Option value="Groceries">Groceries</Option>
          <Option value="Pastry">Pastry</Option>
        </Select>
      </FormControl>
      <div style={{ position: "relative", top: "5px" }}>
        <FormLabel size="sm"> Sort by </FormLabel>
        <SortIcon />
      </div>
      <FormControl size="md" sx={{ width: "100px" }}>
        <FormLabel size="sm"> Distance</FormLabel>
        <Button
          variant={distanceFilter === null ? "outlined" : "soft"}
          onClick={() => {
            setDistanceFilter(!distanceFilter);
            setDateFilter(null);
            setPriceFilter(null);
          }}
          color={distanceFilter === null ? "neutral" : "success"}
          endDecorator={distanceFilter ===true ? <ArrowUpward /> : (distanceFilter === false && <ArrowDownward />)}
        />
      </FormControl>
      <FormControl size="md" sx={{ width: "100px" }}>
        <FormLabel>Date</FormLabel>
        <Button
          variant={dateFilter === null ? "outlined" : "soft"}
          onClick={() => {
            setDateFilter(!dateFilter);
            setDistanceFilter(null);
            setPriceFilter(null);
          }}
          color={dateFilter === null ? "neutral" : "success"}
          endDecorator={dateFilter ===true ? <ArrowUpward /> : (dateFilter === false && <ArrowDownward />)}
        />
      </FormControl>
      <FormControl size="md" sx={{ width: "100px", textAlign: "center" }}>
        <FormLabel>Price</FormLabel>
        <Button
          variant={priceFilter === null ? "outlined" : "soft"}
          onClick={() => {
            setPriceFilter(!priceFilter);
            setDateFilter(null);
            setDistanceFilter(null);
          }}
          color={priceFilter === null ? "neutral" : "success"}
          endDecorator={priceFilter ===true ? <ArrowUpward /> : (priceFilter === false && <ArrowDownward />)}
        />
      </FormControl>{" "}
      <IconButton onClick={()=>{
        setDistanceFilter(null);
        setPriceFilter(null);
        setDateFilter(null);
      }}>
      <FilterListOffIcon/>
      </IconButton>
    </Paper>
  );
}
