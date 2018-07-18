import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Parcel from './Parcel';

class Parcels extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }
  render(){
    const currentUrlPath =  this.props.history.location.pathname
    const refreshData = this.props.refreshData
    const parcels = this.props.parcels
    return(
      <div>
        {parcels.map(parcel =>
          <Parcel
            key={parcel.id}
            parcel={parcel}
            refreshData={refreshData}
            currentUrlPath={currentUrlPath}
            fieldSelected={this.props.fieldSelected}
            fieldSelectedSentToForm={this.props.fieldSelectedSentToForm}
          />)
        }
      </div>
    )
  }
}

export default withRouter(Parcels);
