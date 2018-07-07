import React from 'react';
import { connect } from 'react-redux';

import BlogPost from './BlogPost'

const BlogPosts = ({blog_posts}) => {

  return (
    <div>
      {
        blog_posts.map(blog_post => <BlogPost key={blog_post.id} blog_post={blog_post}/>)
      }
    </div>

  )
}

const mapStateToProps = state => ({
    blog_posts: state.posts
})

export default connect(mapStateToProps)(BlogPosts)
