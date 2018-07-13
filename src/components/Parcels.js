import React from 'react';
import { connect } from 'react-redux';

import Parcel from './Parcel'

const Parcels = ({parcels, authState, refreshData}) => {
  console.log('HAMBRUGARZ: ', parcels)
  return (
    <div>
      {parcels.map(parcel => <Parcel key={parcel.id} parcel={parcel} refreshData={refreshData}/>)}
    </div>

  )
}

export default Parcels
