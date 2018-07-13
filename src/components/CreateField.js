import React, { Component } from 'react'
// import { request } from '../helpers'
import { withRouter } from 'react-router-dom'
import { addTransaction } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class CreateField extends Component {

  componentDidMount(){
  }

  cancel = () => {
    this.props.history.push('/')
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTransaction(event.target.title.value, event.target.body.value)
    // request('/blog_posts','post', {
    //   title: event.target.title.value,
    //   body: event.target.body.value,
    // })
    // .then(response => {
      this.props.history.push('/')
    // })
  }

  render(){
    return (
      <div>
        <p>Hello World</p>
      </div>
      // <div className="container">
      //   <form onSubmit={this.handleSubmit}>
      //     <div className="form-group">
      //       <label htmlFor="exampleFormControlInput1">Blog Title</label>
      //       <input name="title" type="text" className="form-control" id="exampleFormControlInput1" />
      //     </div>
      //     <div className="nav-scroller py-1 mb-2">
      //     </div>
      //     <div className="form-group">
      //       <label htmlFor="exampleFormControlTextarea1">Blog Body</label>
      //       <textarea  name="body" className="form-control" id="exampleFormControlTextarea1" rows="35"></textarea>
      //     </div>
      //     <div>
      //       <input type='submit' value="Create Post" className="btn btn-primary" />
      //       <button
      //         className="btn btn-danger"
      //         style={{marginLeft:'5px'}}
      //         onClick={() => this.cancel()} >
      //         Cancel
      //       </button>
      //     </div>
      //   </form>
      // </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addTransaction
}, dispatch)

export default connect(null, mapDispatchToProps)(withRouter(CreateField))
