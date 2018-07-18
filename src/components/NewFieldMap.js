import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
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
  )(props => {
    return (
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
          }}
        />
      <MyPolygon paths={props.paths} onPolygonComplete={props.onPolygonComplete}/>
      </GoogleMap>
    )
  }

);

class MyPolygon extends Component {
  onChangeStart = () => null
  onChangeEnd = () => null
  onChangeSet = () => null
  onChangeInsert = () => null
  onChangeRemove = () => null

  componentDidMount() {
  }

  setCoords = (position) => {
    var coordinates = (this.polyRef.getPath().getArray().map(ele => ({lat: ele.lat(), lng: ele.lng()})));
    // this.polyRef.setPath([])
    this.props.onPolygonComplete(coordinates)
  }

  componentDidUpdate(){
    window.google.maps.event.addListener(
      this.polyRef.getPath(),
      'set_at',
      this.setCoords
    )
    window.google.maps.event.addListener(
      this.polyRef.getPath(),
      'insert_at',
      this.setCoords
    )
    window.google.maps.event.addListener(
      this.polyRef.getPath(),
      'remove_at',
      this.setCoords
    )
  }

  onChange = position => ({
    coordinate: {
      lat: this.__polygon.b[position].lat(),
      lng: this.__polygon.b[position].lng(),
    },
    id: this.props.id,
    position,
  });

  onRemove = position => ({
    id: this.props.id,
    position,
  });

  // __ref = ref => this.__polygon = ref && ref.getPath();
  __ref = ref => this.polyRef = ref

  render() {
    const { paths } = this.props;
    return <Polygon
      ref={this.__ref}
      paths={paths}
      options={{
        editable: true,
        draggable: true
      }}
      // onMouseDown={this.onChangeStart}
      // onTouchStart={this.thisonChangeStart}
      // onMouseUp={this.onChangeEnd}
      // onTouchEnd={this.onChangeEnd}
    />;
  }
}





const mapStateToProps = state => ({showSignupError: state.showSignupError});

// const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators({addField}, dispatch)
// }

export default connect(mapStateToProps)(NewFieldMap);
