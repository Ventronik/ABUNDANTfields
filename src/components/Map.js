import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { compose, withProps } from "recompose";
// const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");

const Map = compose (
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC7V5C9L6LbW9TKDKYSuYXKuXYYaORJrD0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={new window.google.maps.LatLng(-34.397, 150.644)}
    >
    </GoogleMap>
);

export default Map;
