import React, { useEffect, useState } from "react";
import Map from "../components/map";
import { FaPhone } from "react-icons/fa";

function Delivery() {
  const [loc, setLoc] = useState({
    coordinates: null,
    title: null,
    desc: "YOU ARE HERE",
  });
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
        setLoc({
          coordinates: data.features[0].center,
          title: data.features[0].place_name,
          desc: "YOU ARE HERE",
        });
        console.log(data);
      });
  };

  useEffect(() => {
    getPickupCoordinates("Panvel");
  }, []);
  return (
    <>
      <div>Hello world</div>
      {/* <div className="m-3"> */}
      <Map loc={loc} />
      {/* </div> */}
      <div className=" text-2xl text-red-500 font-bold m-10">
        Your ORDER Is HERE
      </div>
      <div>
        <img src={FaPhone} alt="phone" />
        Call us
      </div>
    </>
  );
}

export default Delivery;
