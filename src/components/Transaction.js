import React from 'react'
// import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { withAuthentication } from '../helpers'
import { bindActionCreators } from 'redux'
import { deleteTransaction } from '../actions'
import { connect } from 'react-redux'

import moment from 'moment'

const Transaction = ({ transaction, authState, refreshData, deleteTransaction }) => {
  const { id, users_id, location, created_at, username, parcel_id, parcel_name } = transaction;

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
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteTransaction
}, dispatch)

export default connect(null, mapDispatchToProps)(withAuthentication(Transaction))
