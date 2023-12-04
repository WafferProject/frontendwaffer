import React, { useState } from 'react';
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import { Paper } from "@mui/material";
import { Button } from "@mui/joy";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import OrderDetails from "./OrderDetails";
import DeleteIcon from '@mui/icons-material/Delete';

function OfferCreation({ offer, updateOffer, deleteOffer }) {
  const [isViewOrdersClicked, setIsViewOrdersClicked] = useState(false);
  const handleViewOrdersClick = () => {
    setIsViewOrdersClicked(true);
  };
  const [updatedOfferData, setUpdatedOfferData] = useState({
    offerName: offer.offerName,
    category: offer.category,
    quantityAvailable:offer.quantityAvailable,
    originalPrice:offer.originalPrice,
    discountedPrice:offer.discountedPrice,
    expirationDate:offer.expirationDate,
    productDescription:offer.productDescription,
    imagePreview:offer.imagePreview
    
  });
  
 
  const handleUpdateOffer = () => {
    
    updateOffer(offer.id, updatedOfferData);
  };

  const handleDeleteOffer = () => {
   
    deleteOffer(offer.id);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedOfferData({
      ...updatedOfferData,
      [name]: value,
    });
  };
  return (
    <div style={{ marginTop: '10px' }}>
    <Card
      variant="outlined"
      sx={{
        width: "450px",
        margin: '10px auto',
        "&:hover": {
          boxShadow: "lg",
          borderColor: "success.outlinedHoverBorder",
        },
        margin:'0 auto'
      }}
    >
      <div style={{ display: "flex" }}>
        <Paper
          elevation={24}
          style={{ width: 210, marginRight: "15px", padding: "10px" }}
          variant="outlined"
        >
          <Paper elevation={6} style={{ marginBottom: "15px" }}>
            <AspectRatio ratio="2">
              <img
                src={offer.imagePreview} // Use the offer's image URL here
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </Paper>
          
          <hr style={{ margin: "0 auto ", width: "150px" }} />
          <CardContent
            orientation="vertical"
            style={{ marginLeft: "5px", marginTop: "10px" }}
          >
            <Typography level="title-md">{offer.restaurant}</Typography>
            <Typography level="body-sm">
              {offer.location} <AddLocationAltOutlinedIcon />
            </Typography>
          </CardContent>
        </Paper>
        <Divider orientation="vertical" />

        <Paper
          variant="outlined"
          elevation={24}
          style={{
            padding: "8px",
            width: "175px",
            backgroundColor: "white",
            borderRadius: "7px",
            marginLeft: "15px",
          }}
        >
          <div
            style={{
              backgroundColor: "#FBFAF5",
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "7px",
              padding:'10px',
              gap: "10px",
            }}
          >
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
              fontFamily={"roboto"}
            >
              {offer.category}
            </Typography>
            <Divider />
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
              fontFamily={"roboto"}
            >
              Price : &nbsp; &nbsp;
              <Typography fontFamily={"Lobster"} textColor="#c94438">
                <s>{offer.originalPrice} TND </s> &nbsp; {offer.discountedPrice} TND
              </Typography>
            </Typography>
            <Divider />
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
              fontFamily={"roboto"}
            >
              {offer.quantity} pieces to save !
            </Typography>
            <Divider />
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
              fontFamily={"roboto"}
            >
              Pickup between {offer.pickupStart} and {offer.pickupEnd}
            </Typography>
            <Divider/>
          </div>
        </Paper>
      </div>
      <Paper elevation={2}>
        <CardOverflow
          variant="soft"
          sx={{ bgcolor: "background.level2", height: "50px" }}
        >
          <CardContent orientation="horizontal">
            <Typography
              level="body-xs"
              fontWeight="bold"
              textColor="text.secondary"
              alignContent={"baseline"}
            >
              Created about 10 minutes ago
            </Typography>
            <Divider orientation="vertical" />
         
            <Button
              style={{
                position: "absolute ",
                height: "40px",
                width: "135px",
                right: "6px",
                top: "5px",
              }}
              variant="outlined"
              endDecorator={<ArrowOutwardOutlinedIcon />}
              color="primary"
              onClick={handleViewOrdersClick}
            >
              Track Orders
            </Button>
          </CardContent>
        </CardOverflow>
      </Paper>
      {isViewOrdersClicked && <OrderDetails handleClose={() => setIsViewOrdersClicked(false)} />}
      <div>
          <Button variant="outlined" color="primary" onClick={handleUpdateOffer}>
            Update Offer
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleDeleteOffer}>
            Delete Offer
          </Button>
        </div>     
    </Card>
    </div>
  );
}

export default OfferCreation;
