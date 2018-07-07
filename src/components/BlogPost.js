import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { withAuthentication } from '../helpers'
import { bindActionCreators } from 'redux'
import { deletePost } from '../actions'
import { connect } from 'react-redux'

import moment from 'moment'

const BlogPost = ({ blog_post, authState, refreshData, deletePost }) => {
  const { id, users_id, title, created_at, username, labels, body } = blog_post;

  return (
    <div className="blog-post">
      <div>
        <h1 style={{display:'inline'}} className="blog-post-title">{title}</h1>
        {
          authState && authState.id === users_id ?
          <span className="float-right" >
            <span className="btn btn-md btn-secondary" style={{marginRight:'5px'}}>Edit</span>
            <span
              onClick={() => deletePost(id)}
              className="btn btn-md btn-danger">
              Delete
            </span>
          </span> : null
        }
      </div>
      <p className="blog-post-meta">{moment(created_at).format('MMMM DD, YYYY')} by <Link to={`/users/${username}`}>{username}</Link>
       </p>
       <hr />
      <ReactMarkdown source={body} />
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  deletePost
}, dispatch)

export default connect(null, mapDispatchToProps)(withAuthentication(BlogPost))
