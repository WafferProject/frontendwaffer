import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Paper, Button, Alert } from "@mui/material";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import './Map.css'

export default function Map() {
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  const [userCord, setUserCord] = useState({});
  const hasPermissionRef = useRef(false); // Using useRef to store hasPermission

  const askPermission = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("sucess");
        setUserCord({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        hasPermissionRef.current = true; // Update the ref's current property
      },
      (error) => {
        if (error.code === 1) {
          console.log("User denied geolocation permission" + error.code);
          hasPermissionRef.current = false; // Update the ref's current property
        }
      }
    );
  };

  useEffect(askPermission, []);

  return hasPermissionRef.current ? (
    <Paper 
    className="map-container-container"
      
      elevation={8}
    >
      {/* map display if user gives permission */}
      <MapContainer
      className="map-container"
        center={[userCord.lat, userCord.long]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[userCord.lat, userCord.long]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Paper>
  ) : (
    <Paper 
    className="map-error-container "/* unavailable map display if user doesnt give permission     , enable location button and prompt */
      style={{
        margin: "14px",
        textAlign: "center",
        height: "280px",
        width: "96%",
        borderRadius: "15px",
        border: "1px solid grey",
        padding: "75px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
      elevation={12}
    >
      <Alert variant="outlined" severity="info">
        Map unavailable ! Please enable your location
      </Alert>

      <div>
        Clear the permission cache on top left and then click the button below
      </div>
      <hr style={{ width: "300px", margin: "0 auto" }} />
      <div>
        <Button
          variant="outlined"
          onClick={askPermission}
          endIcon={<AddLocationAltOutlinedIcon />}
        >
          Find nearby
        </Button>
      </div>
    </Paper>
  );
}
