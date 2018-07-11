import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import abundantfields from '../assets/abundantfields.png';
import About from './About';
import Archives from './Archives';
import Authors from './Authors';

import { withAuthentication, AuthenticationService } from '../helpers';
import '../styles/sidebar.css';

const SideBar = (props) => {

  return (
    <aside className="col-md-3 blog-sidebar">
      <div className="sidenav">
        <img src={abundantfields} alt="..." className="img-thumbnail"></img>
        <About {...props}/>
        <Archives />
        <Authors />
      </div>
    </aside>
  )
}

export default SideBar
