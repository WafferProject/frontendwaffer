import React, { useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { Paper } from "@mui/material";
import { Button } from "@mui/joy";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import OrderDetails from "./OrderDetails";
import { useAuth } from "../AuthContext";
import chicken from   "../../images/offers/chicken.webp";
import pasta from "../../images/offers/pasta.webp";
import sandwich from "../../images/offers/sandiwch.webp";
import pizza from "../../images/offers/pizza.webp";


function OfferCreation({ offer, updateOffer, deleteOffer, deleted  }) {
  const { userInfoCookie } = useAuth();
  const [isViewOrdersClicked, setIsViewOrdersClicked] = useState(false);

  const handleViewOrdersClick = () => {
    offer.placeOrders.length > 0
      ? setIsViewOrdersClicked(true)
      : alert("no orders at the moment");
  };
  const timeDifference = new Date() - new Date(offer.creation_date);
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));

  const handleUpdateOffer = () => {
    updateOffer(offer.id, offer);
  };

  const handleDeleteOffer = () => {
    deleteOffer(offer.id);
  };

  //random img
  function getRandomImagePath() {
    // Generate a random index within the range of the array length
    const imagePaths = [
      chicken,pizza,sandwich,pasta
    ];
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
console.log(imagePaths[randomIndex]);
    // Return the randomly chosen path
    return imagePaths[randomIndex];
  }

  // Example usage with your paths

  return (
    <div style={{ marginTop: "10px" }}>
      <Card
        variant="outlined"
        sx={{
          width: "450px",
          margin: "10px auto",
          "&:hover": {
            boxShadow: "lg",
            borderColor: "success.outlinedHoverBorder",
          },
          margin: "0 auto",
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
                  src={(getRandomImagePath())}
                  // Use the offer's image URL here
                  loading="lazy"
                  alt={offer.offerName}
                />
              </AspectRatio>
            </Paper>

            <hr style={{ margin: "0 auto ", width: "150px" }} />
            <CardContent
              orientation="vertical"
              style={{ marginLeft: "5px", marginTop: "10px" }}
            >
              <Typography level="title-md">{userInfoCookie.name}</Typography>
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
                padding: "10px",
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
                  <s>{offer.new_price} TND </s> &nbsp; {offer.old_price} TND
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
                Expires {offer.expirationDate}
              </Typography>
              <Divider />
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
                Created about &nbsp;{minutesDifference}&nbsp;minutes ago
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
        {isViewOrdersClicked && (
          <OrderDetails
            selectedOffer={offer}
            handleClose={() => {
              setIsViewOrdersClicked(false);
            }}
          />
        )}
        {!deleted && (
          <div>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleUpdateOffer}
            >
              Update Offer
            </Button>
            <Button
              variant="outlined"
              color="danger"
              onClick={handleDeleteOffer}
              sx={{ marginLeft: "20px" }}
            >
              Delete Offer
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

export default OfferCreation;
