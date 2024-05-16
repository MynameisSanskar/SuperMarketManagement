import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
/**  import "mapbox-gl/dist/mapbox-gl.css";
 * ! DO NOT UNCOMMENT, DOESNT LOAD THE MAP: no such file exists
 * ! map ref also doesnt work
 *
 */

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGV2bGlucm9jaGEiLCJhIjoiY2t2bG82eTk4NXFrcDJvcXBsemZzdnJoYSJ9.aq3RAvhuRww7R_7q-giWpA";

export const Map = (props) => {
  // const mapRef = useRef(null);
  const [curr, setcurr] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setcurr(position.coords);
    });

    console.log(props.loc.coordinates && curr);
    if (props.loc?.coordinates && curr) {
      const map = new mapboxgl.Map({
        container: "map",
        // style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
        style: "mapbox://styles/examples/clg45vm7400c501pfubolb0xz",
        center: props.loc.coordinates,
        zoom: 11,
      }).fitBounds(
        [
          [curr.longitude, curr.latitude],
          [curr.longitude, curr.latitude],
        ],
        {
          padding: { top: 10, bottom: 25, left: 15, right: 5 },
        }
      );
      // map.addControl(new mapboxgl.NavigationControl(), "bottom-left");

      //   new mapboxgl.Marker()
      //     // .setLngLat([curr.longitude, curr.latitude])
      //     .setLngLat([props.coordinates])
      //     //   // .setPopup(
      //     //   //   new mapboxgl.Popup({ offset: 25 }) // add popups
      //     //   //     .setHTML(
      //     //   //       `<h3>${props.loc.title || "title"}</h3><p>${
      //     //   //         props.loc.desc || "desc"
      //     //   //       }</p>`
      //     //   //     )
      //     //   // )
      //     .addTo(map);
    }
  }, [props.loc]);

  return <div id="map" style={{ height: "500px" }}></div>;
};

export default Map;
