import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'

// import Labels from './Labels'
import BlogPostsFrontPage from './BlogPostsFrontPage'
import SideBar from './SideBar'
import Footer from './Footer'

import '../styles/home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <main role="main" className="container">
          <div className="row">
            <SideBar />
            <Switch>
              <Route exact path={this.props.match.url} component={BlogPostsFrontPage} />
            </Switch>

          </div>
        </main>

        <Footer />
      </div>
    )
  }
}

export default Home
