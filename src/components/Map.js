import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Paper, Button, Alert } from "@mui/material";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import "./Map.css";

export default function Map({location}) {
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  const [userCord, setUserCord] = useState({});
  const hasPermission = useRef(false); // Using useRef to store hasPermission

  const askPermission = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("sucess");
        setUserCord({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        hasPermission.current = true; // Update the ref's current property
      },
      (error) => {
        if (error.code === 1) {
          console.log("User denied geolocation permission" + error.code);
          hasPermission.current = false; // Update the ref's current property
        }
      }
    );
  };

  useEffect(askPermission, []);

  return hasPermission.current ? (
    <Paper elevation={8}  className="map-container-container" style={{ borderRadius: '40px' }} >
      {/* map display if user gives permission */}
      <MapContainer
        style={{ height: "300px", width: "100%", borderRadius: "30px" }}
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
      className="map-error-container " /* unavailable map display if user doesnt give permission     , enable location button and prompt */
      elevation={12}
      style={{        borderRadius: '15px'
      }}
    >
      <Alert variant="outlined" severity="info">
        Map unavailable ! Please enable your location
      </Alert>

      <div>
        Clear the permission cache on top left and then click the button below
      </div>

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
