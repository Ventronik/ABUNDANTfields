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
    this.state={
      tractor: tractorGray
    }
  }
  fieldSelector = () => {
    this.state.tractor === tractorGray ? this.setState({tractor:tractorBlue}): this.setState({tractor:tractorGray})
  }

  render(){
    const remove = (id) => {
      // request(`/blog_posts/${id}`, 'delete')
      // .then(response => {
      // refreshData()
      // })
    }

    const { id, users_id, location, created_at, username, parcel_id, parcel_name, } = this.props.parcel;
    let urlCoordinates = location.reduce((acc,arr)=>`${acc}|${arr.lat},${arr.lng}`,'');
    urlCoordinates = urlCoordinates +`|${location[0].lat},${location[0].lng}`;

    return (
      <div className="blog-post row" onCLick={this.fieldSelector}>
        <div className="col-12">
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
          <p className="blog-post-meta">{moment(created_at).format('MMMM DD, YYYY')} by <Link to={`/users/${username}`}>{username}</Link>
          </p>
        </div>
        <hr />
      <div className="row justify-content-between">
          { this.props.currentUrlPath === "/rentField/fieldPicker" ?
            <div className="col" onClick={()=>this.fieldSelector()}>
              <img src={this.state.tractor} onCLick={this.fieldSelector}></img>
            </div>
            : null
          }
          <div classname="col">
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?size=120x120&maptype=satellite&sensor=false&key=AIzaSyC7V5C9L6LbW9TKDKYSuYXKuXYYaORJrD0&path=color:red|weight:4|fillcolor:white${urlCoordinates}`}
              height="180" width="180"></img>
          </div>
          <div className="col">
            <ul>
              <li>{id}</li>
              <li>{users_id}</li>
              <li>{created_at}</li>
              <li>{username}</li>
              <li>{parcel_id}</li>
              <li>{parcel_name}</li>
            </ul>
          </div>
        </div>
      </div>
      )
    }
  }


const mapDispatchToProps = dispatch => bindActionCreators({
  deleteTransaction
}, dispatch)

export default connect(null, mapDispatchToProps)(withRouter(withAuthentication(Parcel)))
