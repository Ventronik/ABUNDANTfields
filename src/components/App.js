import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthenticatedRoute } from '../helpers';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'
import Login from './Login';
import Home from './Home';
import Header from './Header';
import CreateBlogPost from './CreateBlogPost';

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="container">
            <Header />
          </div>
          <Switch>
            <Route path='/login' component={Login} />
            <AuthenticatedRoute exact path='/create' component={CreateBlogPost} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts
}, dispatch)

export default connect(null,mapDispatchToProps)(App);
