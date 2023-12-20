import Modal from "@mui/joy/Modal";
import "./OrderDetails.css";
import { CloseOutlined } from "@mui/icons-material";
import OrderTable from "./OrderTable";
import React, { useState } from "react";

const OrderDetails = ({ handleClose, selectedOffer }) => {

  const ordersData = selectedOffer.placeOrders.map((order) => {
    //adapting the order rows objects with the columns 
    return {
      id: order.id,
      first_name: order.Consumer.first_name, 
      last_name: order.Consumer.last_name, 
      quantity: order.quantity, 
      creation_date: new Date(order.creation_date).toLocaleDateString() ,
      status: order.status, 
    };
  });

  
  const [rows, setRows] = useState(ordersData);

  const handleDeleteRow = (id) => {
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, selected: !row.selected } : row
      )
    );
  };
  const selectedRows = rows.filter((row) => row.selected).map((row) => row.id);

  return (
    <Modal
      open={true}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      closeAfterTransition
      onClose={handleClose}
    >
      <div>
        <div
          onClick={(e) => e.stopPropagation()}
          className="order-details-content"
        >
          <div className="title">
            <p>Order Details</p>
          </div>
          <OrderTable
            rows={rows}
            onDeleteRow={handleDeleteRow}
            selectedRows={selectedRows}
          />

          <div className="close">
            <CloseOutlined onClick={handleClose} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default OrderDetails;
