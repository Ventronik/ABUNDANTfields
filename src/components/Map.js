import React from 'react';
import { connect } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { compose, withProps } from "recompose";

const Map = compose (
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC7V5C9L6LbW9TKDKYSuYXKuXYYaORJrD0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `750px`, width: '750px' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={11}
      defaultCenter={new window.google.maps.LatLng(47.637, -122.324)}
      mapTypeId={'satellite'}
    >
    </GoogleMap>
);

const mapStateToProps = state => ({transactions: state.transactions});

export default connect()(Map);
