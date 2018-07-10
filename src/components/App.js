import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthenticatedRoute } from '../helpers';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTransactions } from '../actions'

import Home from './Home';
// import CreateBlogPost from './CreateBlogPost';

class App extends Component {
  componentDidMount() {
    this.props.fetchTransactions()
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="container">
            <div className="row">
              <Switch>
                <Route path='/' component={Home} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTransactions
}, dispatch)

export default connect(null,mapDispatchToProps)(App);
