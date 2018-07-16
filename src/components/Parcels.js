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
    console.log(this.props)
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
// = ({parcels, authState, refreshData}) => {
//   // console.log('HAMBRUGARZ: ', props);
//
// }
}

export default withRouter(Parcels);
