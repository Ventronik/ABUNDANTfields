import React from 'react'
// import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { withAuthentication } from '../helpers'
import { bindActionCreators } from 'redux'
import { deleteTransaction } from '../actions'
import { connect } from 'react-redux'

import moment from 'moment'

const Parcel = ({ parcel, authState, refreshData, deleteParcel }) => {
  const { id, users_id, location, created_at, username, parcel_id, parcel_name } = parcel;
  // console.log('HELLO: ', JSON.parse(location))
  const remove = (id) => {
    // request(`/blog_posts/${id}`, 'delete')
    // .then(response => {
      // refreshData()
    // })
  }

  let urlCoordinates = location.reduce((acc,arr)=>`${acc}|${arr.lat},${arr.lng}`,'')
  urlCoordinates = urlCoordinates +`|${location[0].lat},${location[0].lng}`
  console.log('HAMBRUGARZ: ', location[0].lat, urlCoordinates)

  return (
    <div className="blog-post">
      <div>
        <h1 style={{display:'inline'}} className="blog-post-title">{parcel_name}</h1>
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
      </div>
      <p className="blog-post-meta">{moment(created_at).format('MMMM DD, YYYY')} by <Link to={`/users/${username}`}>{username}</Link>
       </p>
       <hr />
      {/* <ReactMarkdown source={body} /> */}
      <p>{id}, {users_id}, {created_at}, {username}, {parcel_id}, {parcel_name}</p>
    <img
      src={`http://maps.googleapis.com/maps/api/staticmap?size=180x180&maptype=satellite&sensor=false&key=AIzaSyC7V5C9L6LbW9TKDKYSuYXKuXYYaORJrD0&path=color:red|weight:4|fillcolor:white${urlCoordinates}`}
      height="180" width="180"></img>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteTransaction
}, dispatch)

export default connect(null, mapDispatchToProps)(withAuthentication(Parcel))
