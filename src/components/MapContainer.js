import React, { Component } from 'react';
import Map from './Map';
import NewFieldMap from './NewFieldMap';
import { withRouter } from 'react-router-dom';

class MapContainer extends Component {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    // this.delayedShowMarker()
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    const currentUrlPath =  this.props.history.location.pathname
    return (
      <div>
        <div id='map-container'>
          { currentUrlPath === "/" ?
            <Map
              isMarkerShown={this.state.isMarkerShown}
              onMarkerClick={this.handleMarkerClick}
            />
          :
            <NewFieldMap
              isMarkerShown={this.state.isMarkerShown}
              onMarkerClick={this.handleMarkerClick}
              onPolygonComplete={this.props.onPolygonComplete}
              paths={this.props.paths}
            />
        }
        </div>
      </div>
    )
  }
}

export default withRouter(MapContainer);
