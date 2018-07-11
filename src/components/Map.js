import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { compose, withProps } from "recompose";
const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");

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
    <DrawingManager
      defaultDrawingMode={window.google.maps.drawing.OverlayType.POLYGON}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: window.google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            window.google.maps.drawing.OverlayType.POLYGON,
            window.google.maps.drawing.OverlayType.RECTANGLE,
          ]
        }
      }}
      onPolygonComplete={
        function (polygon) {
          var coordinates = (polygon.getPath().getArray().map(ele => ({lat: ele.lat(), lng: ele.lng()})));
          console.log(coordinates);
        }
      }
      onRectangleComplete={
        function (rectangle) {
          var coordinates = (rectangle.getBounds().toJSON());
          console.log(coordinates);
        }
      }
    />
  </GoogleMap>
);

export default Map;
