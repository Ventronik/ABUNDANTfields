import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { request } from '../helpers'

class Archives extends Component {
  constructor(props){
    super(props)

    this.state = {
      allMonthsWithBlogs: []
    }
  }

  componentDidMount(){
    this.getData()
  }

  getData = () => {
    request('/blog_posts/getAllMonthsWithBlogs')
    .then((allMonthsWithBlogs) => {
      this.setState({
        allMonthsWithBlogs: allMonthsWithBlogs.data.allMonthsWithBlogs.reverse()
      })
    })
  }

  render(){
    return (
      <div className="p-3">
        <h4 className="font-italic">Archives</h4>
        <ol className="list-unstyled mb-0">
          {
            this.state.allMonthsWithBlogs.map((ele, id) => {
              return <li key={id}><Link to={`/archive/${ele.num}/${ele.year}`}>{ele.month} {ele.year}</Link></li>
            })
          }
        </ol>
      </div>
    )
  }
}

export default Archives
