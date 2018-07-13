import { request } from '../helpers'

export const ADD_PARCEL = "ADD_PARCEL"
export const FETCH_PARCELS_SUCCESS = "FETCH_PARCELS_SUCCESS"
export const FETCH_PARCELS_FAILED = "FETCH_PARCELS_FAILED"
export const DELETE_PARCEL = "DELETE_PARCEL"
export const EDIT_PARCEL = "EDIT_PARCEL"
export const ADD_FIELD = "ADD_FIELD"

export const addParcel = (title, body ) => {
  let newParcel = {
    // title: title,
    // body: body
  }
  return dispatch => {
    request(`/parcels`, `post`, newParcel)
    .then(parcel => dispatch({
      type: ADD_PARCEL,
      payload: parcel
    }))
  }
}

export const fetchParcels = () => {
  return dispatch => {
    request('/parcels?limit=10&orderByColumn=id&orderDirection=desc')
      .then(parcel => dispatch({
        type: FETCH_PARCELS_SUCCESS,
        payload: parcel.data.parcels
      }))
  }
}

export const deleteParcel = (id) => {
  return dispatch => {
    request(`/parcels/${id}`, 'delete')
    .then(parcels => dispatch({
      type: DELETE_PARCEL,
      payload: parcels
    }))
    .then(response => {
      dispatch(fetchParcels())
    })
  }
}

export const editParcel = (id) =>{
  return dispatch => {
    request(`/parcels/${id}`, 'put')
    .then(parcel=> dispatch({
      type: EDIT_PARCEL,
      payload: parcel
    }))
    .then(response=>{
      dispatch(fetchParcels())
    })
  }
}

export const addField = (location, name ) => {
  let newParcel = {
    location,
    name
  }
  return dispatch => {
    request(`/parcels`, `post`, newParcel)
    .then(field => dispatch({
      type: ADD_FIELD,
      payload: field
    }))
  }
}
