import React, { useEffect, useState } from "react";
import Map from "./map";

function Delivery() {
  const [pickupCoordinates, setPickupCoordinates] = useState(null);
  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZGV2bGlucm9jaGEiLCJhIjoiY2t2bG82eTk4NXFrcDJvcXBsemZzdnJoYSJ9.aq3RAvhuRww7R_7q-giWpA",
          limit: 1,
        }),
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {}, []);
  return (
    <div className="h-fit">
      <Map pickupCoordinates={pickupCoordinates} />
    </div>
  );
}

export default Delivery;
