import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { withAuthentication, AuthenticationService } from '../helpers/index'
import abundantfields from '../assets/abundantfields.png'

import '../styles/header.css'

const About = (props ) => {
  const SignInSignOutButton =() => {
    if(props.authState){
      localStorage.removeItem('token')
      AuthenticationService.setAuthState(null)
      props.history.push('/')
    }
    else {
      props.history.push('/login')
    }
  }
  return (
    <div className="p-3 mb-3 bg-light rounded">

      {
        props.authState ?
        <h5 style={{marginLeft: '5px'}}>
          Welcome, {props.authState.username}
        </h5> : <Link className="btn btn-sm btn-outline-secondary" to="/signup">Sign-up</Link>
      }

      {
        AuthenticationService.getAuthState() ?
        <Link
          className="btn btn-sm btn-outline-secondary"
          style={{marginRight: '5px'}}
          to="/createField">
          Rent Field
        </Link> : null
      }

      <span className="btn btn-sm btn-outline-secondary" onClick={()=>SignInSignOutButton()}>
        {props.authState ? 'Sign Out' : 'Sign-in'}
      </span>

      <p></p>
      <div>
        <h5 className="font-italic">About</h5>
        <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod.
        Cras mattis consectetur purus sit amet fermentum.
        Aenean lacinia bibendum nulla sed consectetur.</p>
      </div>
      <Link to="/myFields"><h5 className="font-italic">My Fields</h5></Link>
      <Link to="/newField"><h5 className="font-italic">New Field</h5></Link>
      <Link to="/rentField/fieldPicker"><h5 className="font-italic">Fields to Rent</h5></Link>
    </div>
  )
}

export default withAuthentication(About);
