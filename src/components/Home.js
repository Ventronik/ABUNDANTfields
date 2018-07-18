import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthenticatedRoute } from '../helpers';

import Login from './Login';
import SignUp from './SignUp';
import TransactionsFrontPage from './TransactionsFrontPage';
import SideBar from './SideBar';
import MapContainer from './MapContainer';
import MyFields from './MyFields';
import NewParcelForm from './NewParcelForm';
// import CreateField from './CreateField';
import RentField from './RentField';
// import Footer from './Footer';

import '../styles/home.css';

class Home extends Component {
  render() {
    console.log(this.props.location.pathname)
    return (
        <main role="main" className="container-fluid">
          <div className="row">
            <SideBar {...this.props}/>
            {/* <MapContainer /> */}
            <div className={this.props.location.pathname === "/login" ? "col-md-10": "col-md-10 blog-main"} >
              <Switch>

                <Route exact path='/' component={MapContainer} />
                <Route path='/currentTransactions' component={TransactionsFrontPage} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={SignUp} />
                <AuthenticatedRoute exact path='/newField' component={NewParcelForm} />
                <AuthenticatedRoute exact path='/myFields' component={MyFields} />
                <AuthenticatedRoute path='/rentField' component={RentField} />
              </Switch>
            </div>
          </div>
        </main>
    )
  }
}

export default Home
