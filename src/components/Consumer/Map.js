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

export default function Map({ selectedOffer }) {
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [24, 36],
    iconAnchor: [12, 36],
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  const [userCord, setUserCord] = useState({});
  const hasPermission = useRef(false); // Using useRef to store hasPermission
  const { offersData, setOfferDistance } = useContext(ConsumerContext);

  const askPermission = () => {
    console.log("asking loc permission");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserCord(() => {
          const newcord = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          if (selectedOffer) {

            const selectedLatLng = L.latLng(
              selectedOffer.Buisness.location.coordinates
            );
            const userLatLng = L.latLng(newcord);
            console.log(" this is popup view  " + JSON.stringify(userLatLng));

            console.log(selectedLatLng);
            const distance = selectedLatLng.distanceTo(userLatLng);
            setOfferDistance(Math.floor(distance));
          }
          return newcord;
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
 

  // if(selectedOffer){

  //   const selectedLatLng = L.latLng(selectedOffer.Buisness.location.coordinates);
  //   const userLatLng = L.latLng(userCord);
  //   console.log(selectedLatLng) ;
  //   const distance = selectedLatLng.distanceTo(userLatLng);
  //   setOfferDistance(distance);
  // }
  return hasPermission.current ? (
    <Paper
      elevation={8}
      className="map-container-container"
      style={{ borderRadius: "40px" }}
    >
      {/* map display if user gives permission */}
      <MapContainer
        style={{
          height: selectedOffer ? "280px" : "370px",
          width: "100%",
          borderRadius: "30px",
        }}
        center={
          // centering the map on a specifc offer or the user location
          selectedOffer
            ? [
                selectedOffer.Buisness.location.coordinates[0],
                selectedOffer.Buisness.location.coordinates[1],
              ]
            : [userCord.lat, userCord.lng]
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
        <Marker position={[userCord.lat, userCord.lng]}>
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
