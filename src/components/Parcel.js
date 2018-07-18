import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuthentication } from '../helpers';
import { bindActionCreators } from 'redux';
import { deleteTransaction } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import tractorGray from '../assets/tractor-gray.png';
import tractorBlue from '../assets/tractor-blue.png';


class Parcel extends Component {
  constructor(props){
    super(props)
  }
  fieldSelector = (field) => {
    if(this.props.fieldSelected !== field){
      this.props.fieldSelectedSentToForm(field)
    } else {
       this.props.fieldSelectedSentToForm({id: null})
    }
    let thing;
    if(this.props.fieldSelected.id) {thing = this.props.fieldSelected.id}
  }

  render(){
    // const remove = (id) => {
      // request(`/blog_posts/${id}`, 'delete')
      // .then(response => {
      // refreshData()
      // })
    // }
    const { id, users_id, location, created_at, username, parcel_id, parcel_name, acres, renter_fname, renter_lname, renter_uname } = this.props.parcel;
    const {user, renter} = this.props.parcel

    let urlCoordinates = location.reduce((acc,arr)=>`${acc}|${arr.lat},${arr.lng}`,'');
    urlCoordinates = urlCoordinates +`|${location[0].lat},${location[0].lng}`;

    return (
      <div>
        <div className="blog-post justify-content-between row" onClick={(e)=> this.props.currentUrlPath === "/rentField/fieldPicker" ? this.fieldSelector(this.props.parcel) : null}>
          <div className="col">
            <div className="row">
              { this.props.currentUrlPath === "/rentField/fieldPicker" ?
                <div className="col-2">
                  <div className="col" >
                    <img className="tractor" src={this.props.fieldSelected.id === this.props.parcel.id ? tractorBlue : tractorGray} alt="field selection icon"></img>
                  </div>
                </div>
                : null
              }
              <div className="col">
                <h3 style={{display:'inline'}} className="blog-post-title">{parcel_name}</h3>
                {
                  this.props.authState && this.props.authState.id === users_id ?
                  <span className="float-right" >
                    <span className="btn btn-md btn-secondary" style={{marginRight:'5px'}}>Edit</span>
                    <span
                      onClick={() => deleteTransaction(id)}
                      className="btn btn-md btn-danger">
                      Delete
                     </span>
                  </span> : null
                }
                {
                  renter
                  ? <p className="blog-post-meta">{moment(created_at).format('MMMM DD, YYYY')} by {user.first_name} to {renter.first_name}</p>
                  : <p className="blog-post-meta">{moment(created_at).format('MMMM DD, YYYY')} by {user.first_name}</p>
                }

              </div>
            </div>
            <div className="row">
              <div className="col">
                <ul>
                  <li>Field Number: {id}</li>
                  <li>Created At: {created_at}</li>
                  {/* <li>Name: {parcel_name}</li> */}
                  <li>{acres} acres</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?size=120x120&scale=2&maptype=satellite&sensor=false&key=AIzaSyC7V5C9L6LbW9TKDKYSuYXKuXYYaORJrD0&path=color:red|weight:4|fillcolor:white${urlCoordinates}`}
              height="180" width="180"
              alt="Satellite display of field"></img>
          </div>
        </div>
        <hr />
      </div>
      )
    }
  }


const mapDispatchToProps = dispatch => bindActionCreators({
  deleteTransaction
}, dispatch)

export default connect(null, mapDispatchToProps)(withRouter(withAuthentication(Parcel)))
