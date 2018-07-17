import React from 'react';
// import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom';
import { request, withAuthentication } from '../helpers';
import { bindActionCreators } from 'redux';
import { deleteTransaction } from '../actions';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import moment from 'moment';

const Transaction = ({ transaction, authState, getData, deleteTransaction }) => {
  const { id, users_id, created_at, username, parcel_id, parcel_name, location } = transaction;
  let urlCoordinates = ''
  if(location) urlCoordinates = location.reduce((acc,arr)=>`${acc}|${arr.lat},${arr.lng}`,'');
  if(location) urlCoordinates = urlCoordinates +`|${location[0].lat},${location[0].lng}`;

  const rentField = (id, trans_id) => {
    request(`/users/${id}/transactions/${trans_id}`, 'patch')
    .then(response => {
      getData()
    })
  }

  return (
    <div className="blog-post">
      <div>
        <h3 style={{display:'inline'}} className="blog-post-title">{parcel_name}</h3>
        {
          authState && authState.id === users_id ?
          <span className="float-right" >
            <span className="btn btn-md btn-secondary" style={{marginRight:'5px'}}>Edit</span>
            <span
              onClick={() => deleteTransaction(id)}
              className="btn btn-md btn-danger">
              Delete
            </span>
          </span> : null
        }
        <p className="blog-post-meta">{moment(created_at).format('MMMM DD, YYYY')} by <Link to={`/users/${username}`}>{username}</Link></p>
      </div>
      <div className="row justify-content-between">
        <div className="col">
         <img
           src={`https://maps.googleapis.com/maps/api/staticmap?size=120x120&scale=2&maptype=satellite&sensor=false&key=AIzaSyC7V5C9L6LbW9TKDKYSuYXKuXYYaORJrD0&path=color:red|weight:4|fillcolor:white${urlCoordinates}`}
           height="180" width="180"
           alt="Satellite display of field"></img>
        </div>
        <div className="col">
          <p>{id}, {users_id}, {created_at}, {username}, {parcel_id}, {parcel_name}</p>
        </div>
        <div className="col">
          <Button onClick={()=>rentField(authState.id, id) }>Rent Field</Button>
        </div>
      </div>
    <hr />
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteTransaction
}, dispatch)

export default connect(null, mapDispatchToProps)(withAuthentication(Transaction))
