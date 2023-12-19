import React, { useContext } from "react";
import { useState } from "react";
import { FormControl, Select, Option, FormLabel, Button } from "@mui/joy";
import ArrowUpward from "@mui/icons-material/North";
import { IconButton, Paper } from "@mui/material";
import ArrowDownward from "@mui/icons-material/South";
import SortIcon from "@mui/icons-material/Sort";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import { ConsumerContext } from "./ConsumerDashContext";

export default function Filter() {
  const [dateFilter, setDateFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);
  // const [categoryFilter , setCategoryFilter] = useState("all");
  const { setFilter: setFilterObj } = useContext(ConsumerContext);
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-around",
        borderRadius: "20px",
        width: "70%",
        margin: "60px auto",
        height: "75px",
        backgroundColor: "#FBFAF5",
        paddingLeft: "35px",
        paddingRight: "20px",
      }}
      component={"div"}
    >
      <FormControl size="md" sx={{ width: "350px", marginRight: "80px" }}>
        <FormLabel size="sm">Category</FormLabel>
        <Select
          ////test the change on select  , other logic is implemented
          size="sm"
          placeholder="All"
          onChange={(e, newVal) => {
            setFilterObj((prev) => {
              return { ...prev, category: newVal };
            });
          }}
        >
          <Option value="all">All</Option>
          <Option value="food">Food</Option>
          <Option value="groceries">Groceries</Option>
          <Option value="pastry">Pastry</Option>
        </Select>
      </FormControl>
      <div>
        <FormLabel size="sm " sx={{ marginBottom: "8px" }}>
          Sort by
        </FormLabel>
        <SortIcon />
      </div>
      
      <FormControl size="md" sx={{ width: "100px" }}>
        <FormLabel>Date</FormLabel>
        <Button
          variant={dateFilter === null ? "outlined" : "soft"}
          onClick={() => {
            setDateFilter(!dateFilter);
            setPriceFilter(null);
            setFilterObj((prev) => ({
              category: prev.category,
              date: dateFilter ? 0 : 1,
            }));
          }}
          color={dateFilter === null ? "neutral" : "success"}
          endDecorator={
            dateFilter === true ? (
              <ArrowUpward />
            ) : (
              dateFilter === false && <ArrowDownward />
            )
          }
        />
      </FormControl>
      <FormControl size="md" sx={{ width: "100px", textAlign: "center" }}>
        <FormLabel>Price</FormLabel>
        <Button
          variant={priceFilter === null ? "outlined" : "soft"}
          onClick={() => {
            setPriceFilter(!priceFilter);
            setDateFilter(null);
            setFilterObj((prev) => ({
              category: prev.category,
              price: priceFilter ? 0 : 1,
            }));
          }}
          color={priceFilter === null ? "neutral" : "success"}
          endDecorator={
            priceFilter === true ? (
              <ArrowUpward />
            ) : (
              priceFilter === false && <ArrowDownward />
            )
          }
        />
      </FormControl>{" "}
      <IconButton
        onClick={() => {
          setPriceFilter(null);
          setDateFilter(null);
          setFilterObj((prev) => ({
            category: prev.category,
          }));
        }}
      >
        <FilterListOffIcon />
      </IconButton>
    </Paper>
  );
}
