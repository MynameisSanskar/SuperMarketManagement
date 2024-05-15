import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
/**  import "mapbox-gl/dist/mapbox-gl.css";
 * ! DO NOT UNCOMMENT, DOESNT LOAD THE MAP: no such file exists
 *
 */

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGV2bGlucm9jaGEiLCJhIjoiY2t2bG82eTk4NXFrcDJvcXBsemZzdnJoYSJ9.aq3RAvhuRww7R_7q-giWpA";

export const Map = (props) => {
  // const mapRef = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [20.59, 78.96],
      zoom: 5,
    });
    // map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // addToMap(map, props.pickupCoordinates);
    // addToMap(map, props.pickupCoordinates);

    if (props.pickupCoordinates) {
      console.log(props.pickupCoordinates);
      new mapboxgl.Marker().setLngLat(props.pickupCoordinates).addTo(map);
      map.fitBounds([props.pickupCoordinates, props.pickupCoordinates], {
        padding: 60,
      });
    }
  }, [props.pickupCoordinates]);

  const addToMap = (map, coordinates) => {
    return new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <div id="map"></div>;
};

export default Map;
