import React from "react";
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
import {CardActionArea} from "@mui/material";

export default function Offer({setSelectedOffer , data , button}) {
  return (
    
        
    <Card
      variant="outlined"
      sx={{
        width: "420px",
        "&:hover": {
          boxShadow: "lg",
          borderColor: "success.outlinedHoverBorder",
        },
        margin:'15px',
        height:'275px', 
      }}
    >
      <CardActionArea onClick={()=>{setSelectedOffer({}) ; console.log("click done") }}>
      <div style={{ display: "flex" }}>
        <Paper
          style={{ width: 210, marginRight: "15px", padding: "10px" }}
          variant="outlined"
        >
          
          <Paper elevation={6} style={{ marginBottom: "15px" }}>
            <AspectRatio ratio="2">
            
              <img
                src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
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
            <Typography level="title-md">KFC</Typography>
            <Typography level="body-sm">
            
              Aouina <AddLocationAltOutlinedIcon />
             
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
              Sandwich
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
                <s>6 TND </s> &nbsp; 4 TND
              </Typography>
            </Typography>
            <Divider />
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
              fontFamily={"roboto"}
            >
              10 pieces to save !
            </Typography>
            <Divider />
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
              fontFamily={"roboto"}
            >
              pickup between 8 and 7
            </Typography>
            <Divider/>
          </div>
        </Paper>
      </div>
      <Paper elevation={2}>
        <CardOverflow
          variant="soft"
          sx={{ bgcolor: "background.level2", height: "50px" , position:''}}
        >
          <CardContent orientation="horizontal">
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
              alignContent={"baseline"}
            >
              about 10 minutes ago
            </Typography>
            <Divider orientation="vertical" />


          {  button&&<Button
              style={{
                position: "relative ",
                height: "40px",
                width: "135px",
                right: "-100px",
                top: "-7px",
              }}
              variant="outlined"
              endDecorator={<ArrowOutwardOutlinedIcon />}
              color="primary"
            >
              See details
            </Button>}
          </CardContent>
        </CardOverflow>
      </Paper>
      </CardActionArea>
    </Card>
  );
}
