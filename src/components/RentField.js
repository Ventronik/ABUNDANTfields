import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { AuthenticatedRoute } from '../helpers';

import FieldPicker from './FieldPicker';

import '../styles/home.css';

class RentField extends Component {
  render() {
    return (
      <div>
        <main role="main" className="container-fluid">
          <div >
            <div >
              <Switch>
                <AuthenticatedRoute exact path='/rentField/fieldPicker' component={FieldPicker}/>
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

export default withRouter(RentField)
