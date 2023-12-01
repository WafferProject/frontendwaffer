import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { Paper, Button, Alert } from "@mui/material";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import "./Map.css";
import { useContext } from "react";
import { ConsumerContext } from "./ConsumerDashContext";
import { valHooks } from "jquery";

export default function Map({ selectedOffer }) {
  const { offersData } = useContext(ConsumerContext);
  // console.log(selectedOffer.location);
  console.log(offersData.location);

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [24, 36],
    iconAnchor: [12, 36],
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  const [userCord, setUserCord] = useState({});
  const hasPermission = useRef(false); // Using useRef to store hasPermission

  const askPermission = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
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
    <Paper
      elevation={8}
      className="map-container-container"
      style={{ borderRadius: "40px" }}
    >
      {/* map display if user gives permission */}
      <MapContainer
        style={{ height: "370px", width: "100%", borderRadius: "30px" }}
        center={ // centering the map on a specifc offer or the user location 
          selectedOffer
            ? [
                selectedOffer.Buisness.location.coordinates[0],
                selectedOffer.Buisness.location.coordinates[1],
              ]
            : [userCord.lat, userCord.long]
        }
        zoom={9}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {selectedOffer ? (
          <Marker
            position={[
              selectedOffer.Buisness.location.coordinates[0],
              selectedOffer.Buisness.location.coordinates[1],
            ]}
          >
            <Tooltip sticky>
              <span> {selectedOffer.Buisness.name} </span>
            </Tooltip>
          </Marker>
        ) : (
          offersData.map((offer) => (
            <Marker
              position={[
                offer.Buisness.location.coordinates[0],
                offer.Buisness.location.coordinates[1],
              ]}
            >
              <Tooltip sticky>
                <span> {offer.Buisness.name} </span>
              </Tooltip>
            </Marker>
          ))
        )}
        <Marker position={[userCord.lat, userCord.long]}>
          <Tooltip sticky>
            <span>you are here</span>
          </Tooltip>
        </Marker>
      </MapContainer>
    </Paper>
  ) : (
    <Paper
      className="map-error-container " /* unavailable map display if user doesnt give permission     , enable location button and prompt */
      elevation={12}
      style={{ borderRadius: "15px" }}
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
