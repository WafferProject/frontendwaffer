import React from "react";
import "./Order.css";
import { Drawer } from "@mui/joy";
import { Button } from "@mui/joy";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function OrderTab({ isOrderOpen, setOrderOpen }) {
  const url = "http://localhost:8080/api/consumer/order";
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((response) => {
        console.log(
          "order retrieved succssfully" + JSON.stringify(response.data)
        );
        setOrderData(response.data.orders);
      })
      .catch((error) => {
        console.log("error  " + JSON.stringify(error.response));
      
      });
  }, []);

  function Order() {
    return orderData.map((order) => (
      <div className="card checkout">
        <label className="order-title">YOYO</label>
        <label className="date">{ new Date(order.creation_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' , hour12: false  })}</label>
        <div className="details">
          <span>Old Price:</span>
          <span>
            <s>{order.Offer.old_price}$</s>
          </span>
          <span>Quantity:</span>
          <span>{order.quantity}</span>
        </div>

        <div className="checkout--footer">
          <label className="price">
            <sup>$</sup>{order.Offer.new_price}
          </label>
          <Button
            onClick={()=>{setOrderOpen(false)}}
            endDecorator={<QrCodeScannerIcon />}
            variant="soft"
          ></Button>
        </div>
      </div>
    ));
  }

  return (
    <Drawer open={isOrderOpen} onClose={()=>{setOrderOpen(false)}}>
      {Order()}
    </Drawer>
  );
}
