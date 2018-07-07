import React, { Component } from 'react'
import { MoonLoader } from 'react-spinners'

import BlogPosts from './BlogPosts'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { request } from '../helpers'
import { bindActionCreators } from 'redux'

class BlogPostsFrontPage extends Component {
  constructor(props){
    super(props)
    //
    // this.state = {
    //   blog_posts: [],
    //   loading: false
    // }
  }

  componentDidMount(){
    this.getData()
  }

  getData = () => {
    this.props.fetchPosts()
    // this.setState({loading:true})
    // request('/blog_posts?limit=10&orderByColumn=id&orderDirection=desc')
    // .then((blog_posts) => {
      // this.setState({
        // blog_posts:blog_posts.data.blog_posts,
        // loading: false
      // })
    // })
    // .catch(error => {
      // this.setState({loading:false})
    // })
  }

  render(){
    return (
      <div className="col-md-8 blog-main">
        <h3 className="pb-3 mb-4 font-italic border-bottom">
          Latest Post
        </h3>

        {/* {
          this.state.loading ? <MoonLoader /> : <BlogPosts blog_posts={this.state.blog_posts} refreshData={this.getData}/>
        } */}

        {
         <BlogPosts />
        }

        <nav className="blog-pagination">
          <a className="btn btn-outline-primary">Older</a>
          <a className="btn btn-outline-secondary disabled">Newer</a>
        </nav>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts
}, dispatch)

export default connect(null, mapDispatchToProps)(BlogPostsFrontPage)
