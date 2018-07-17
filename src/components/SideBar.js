import React from 'react';
import { Link } from "react-router-dom"

import abundantfields from '../assets/abundantfields.png';
import About from './About';
// import Archives from './Archives';
// import Authors from './Authors';

import { withAuthentication, AuthenticationService } from '../helpers';
import '../styles/sidebar.css';

const SideBar = (props) => {
  console.log('HERE: ', props)
  return (
    <aside className="col-md-3 blog-sidebar">
      <div className="sidenav">
        <Link to={props.authState ? '/home' : '/'}><img src={abundantfields} alt="..." className="img-thumbnail"></img></Link>
        <About {...props}/>
        {/* <Archives /> */}
        {/* <Authors /> */}
      </div>
    </aside>
  )
}

export default withAuthentication(SideBar);
