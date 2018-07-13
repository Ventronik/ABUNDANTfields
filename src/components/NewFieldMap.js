import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withScriptjs, withGoogleMap, GoogleMap, Polygon } from 'react-google-maps';
import { compose, withProps } from 'recompose';
import { addField } from '../actions';
const { DrawingManager } = require('react-google-maps/lib/components/drawing/DrawingManager');

const NewFieldMap = compose (
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC7V5C9L6LbW9TKDKYSuYXKuXYYaORJrD0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`, width: '100%', margin: '1rem' }} />,
    containerElement: <div style={{ height: `700px`, margin: '1rem' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={10}
      defaultCenter={new window.google.maps.LatLng(47.607, -122.15)}
      mapTypeId={'satellite'}

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
          polygon.setPath([])
          props.onPolygonComplete(coordinates)
        }
      }

      onRectangleComplete={
        function (rectangle) {
          var coordinates = (rectangle.getBounds().toJSON());
          console.log(coordinates);
        }
      }
    />
    <Polygon
      paths={props.paths}
      onClick={(event)=> {
        console.log(event)
      }}
      editable={true}
      draggable = {true}
    />
  </GoogleMap>
);

const mapStateToProps = state => ({showSignupError: state.showSignupError});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addField}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(NewFieldMap);
