import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'

// import Labels from './Labels'
import { AuthenticatedRoute } from '../helpers';

import Login from './Login';
import TransactionsFrontPage from './TransactionsFrontPage'
import SideBar from './SideBar'
import MapContainer from './MapContainer'
import CreateBlogPost from './CreateBlogPost';
import Footer from './Footer'

import '../styles/home.css'

class Home extends Component {
  render() {
    console.log('HERE: ', this.props)
    return (
      <div>
        <main role="main" className="container">
          <div className="row">
            <SideBar {...this.props}/>


            {/* <MapContainer /> */}

            <Switch>
              <Route exact path='/' component={MapContainer} />
              <Route path='/home' component={TransactionsFrontPage} />
              <AuthenticatedRoute exact path='/create' component={CreateBlogPost} />
              <Route path='/login' component={Login} />
            </Switch>

          </div>
        </main>

        {/* <Footer /> */}
      </div>
    )
  }
}

export default Home
