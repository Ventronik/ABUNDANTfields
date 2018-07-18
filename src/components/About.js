import React from 'react'
import { Link } from 'react-router-dom'
import { withAuthentication, AuthenticationService } from '../helpers/index'
// import abundantfields from '../assets/abundantfields.png'

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

      <span className="btn btn-sm btn-outline-secondary" onClick={()=>SignInSignOutButton()}>
        {props.authState ? 'Sign Out' : 'Sign-in'}
      </span>

      {
        props.authState ?
        <div>
          <Link to="/currentTransactions"><h5 className="font-italic">Fields for Rent</h5></Link>
          <Link to="/myFields"><h5 className="font-italic">My Fields</h5></Link>
          <Link to="/newField"><h5 className="font-italic">New Field</h5></Link>
          <Link to="/rentField/fieldPicker"><h5 className="font-italic">Rent your Field</h5></Link>
        </div>
        :
        null
      }
    </div>
  )
}

export default withAuthentication(About);
