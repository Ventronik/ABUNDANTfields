import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { AuthenticatedRoute } from '../helpers';

import FieldPicker from './FieldPicker';

import '../styles/home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <main role="main" className="container-fluid">
          <div >
            <h1 className="font-italic border-bottom">
              Select the field you wish to lease
            </h1>
            <button>Choose Field</button>
            <div >
              <Switch>
                <AuthenticatedRoute exact path='/rentField/fieldPicker' component={FieldPicker} />
                {/* <AuthenticatedRoute exact path='/myFields' component={MyFields} /> */}
              </Switch>
            </div>
          </div>
        </main>

        {/* <Footer /> */}
      </div>
    )
  }
}

export default withRouter(Home)
