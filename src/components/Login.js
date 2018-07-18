import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import { request, AuthenticationService } from '../helpers'

import '../styles/login.css'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      showErrorMessage: false
    }
  }

  handleSignIn = event => {
    event.preventDefault()
    const { inputUsername, inputPassword } = event.target
    request('/auth/token','post', {
      username: inputUsername.value,
      password: inputPassword.value })
    .then(response => {
      this.setState({ showErrorMessage: false })
      localStorage.setItem('token', response.data.token)
      return request('/auth/token')
    })
    .then(response => {
      AuthenticationService.setAuthState(response.data)
      this.props.history.push('/currentTransactions')
    })
    .catch(error => {
      this.setState({showErrorMessage: true})
    })
  }

  render(){
    return (
      <div className="login">
        <form onSubmit={this.handleSignIn} className="login-form">
          <div className="text-center ">
            <h1 className=" font-weight-normal">Log in</h1>
          </div>

          <div className="form-label-group">
            <input
              type="text"
              name="inputUsername"
              id="inputUsername"
              className="form-control"
              placeholder="Username"
              required autoFocus />
          </div>

          <div className="form-label-group">
            <input type="password" name="inputPassword" id="inputPassword" className="form-control" placeholder="Password" required />
          </div>
          <div className={ !this.state.showErrorMessage ? 'login-auth-error login-hide-auth-error' : 'login-auth-error' }>
            Invalid Username or Password
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>
    )
  }
}

export default Login
