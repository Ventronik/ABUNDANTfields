import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { withAuthentication, AuthenticationService } from '../helpers'

import '../styles/header.css'

const About = (props) => {
  const SignInSignOutButton =() => {
    if(props.authState){
      localStorage.removeItem('token')
      AuthenticationService.setAuthState(null)
    }
    else {
      props.history.push('/login')
    }
  }
  return (
    <div className="p-3 mb-3 bg-light rounded">
      <div>
        <Link to="/" className="blog-header-logo text-dark">ABUNDANTfields</Link>
      </div>

      {
        props.authState ?
        <span style={{marginLeft: '5px'}}>
          Welcome, {props.authState.username}
        </span> : <Link className="btn btn-sm btn-outline-secondary" to="/">Sign up</Link>
      }

      <span className="btn btn-sm btn-outline-secondary" onClick={()=>this.SignInSignOutButton()}>
        {props.authState ? 'Sign Out' : 'Sign In'}
      </span>

      <h4 className="font-italic">About</h4>
      <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
    </div>
  )
}

export default About
