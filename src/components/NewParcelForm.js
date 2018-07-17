import React, { Component } from 'react';
// import Map from './Map';
// import NewFieldMap from './NewFieldMap';
// import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { request, withAuthentication } from '../helpers';

import MapContainer from './MapContainer';
import NewParcelFormInputs from './NewParcelFormInputs';

class NewParcelForm extends Component {
  state = {
    paths: []
  }

  componentDidMount() {

  }

  onPolygonComplete = (paths) => {
    this.setState({ paths })
    // console.log(this.state.paths)
  }
  onNewParcelForm = (parcel_name, acres, parcel_type) => {
    const userId = this.props.authState.id
    const location = this.state.paths
    request(`/users/${userId}/parcel`, 'post', {parcel_name, location, parcel_type, acres})
    .then(() => this.props.history.push('/myFields'))
    // axios/request
  }
  render() {
    // console.log('this.props: ', this.props, 'this.state: ', this.state, 'props: ')
    // const { paths, onChangeStart, onChangeEnd } = this;
    // const currentUrlPath =  this.props.history.location.pathname
    return (
      <div className="container">
        <div className='row'>
          <div className='col'>
            <h1>Create a new Field</h1>
          <NewParcelFormInputs onNewParcelForm={this.onNewParcelForm}/>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <MapContainer onPolygonComplete={this.onPolygonComplete} paths={this.state.paths} onMouseUp={this.onMouseUp}/>
          </div>
        </div>
      </div>
    )
  }
}

export default withAuthentication(withRouter(NewParcelForm));
