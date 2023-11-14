import React from "react";
import "./Order.css"
import { Drawer } from "@mui/joy";
import {Button} from "@mui/joy";
import { Paper } from "@mui/material";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

export default function OrderTab({ isOrderOpen, setOrderOpen }) {
  function Order() {
    return (
    
       
       <div className="card checkout">
          <label className="title">YOYO</label>
          <label className="date">18:59</label>
          <div className="details">
            <span>Old Price:</span>
            <span><s>7.99$</s></span>
            <span>Quantity:</span>
            <span>4</span>
          </div>
          
          <div className="checkout--footer">
            <label className="price">
              <sup>$</sup>4.99
            </label>
            <Button  onClick={setOrderOpen(false)} endDecorator={<QrCodeScannerIcon/>} variant="soft"></Button>
          </div>
        </div>
    );
  }

  return (
    <Drawer open={isOrderOpen} onClose={setOrderOpen(false)}>
      {Order()}
    </Drawer>
  );
}
