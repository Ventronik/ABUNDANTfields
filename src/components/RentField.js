import React, {Component} from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { AuthenticatedRoute } from '../helpers';

import FieldPicker from './FieldPicker';
import NewTransactionForm from './NewTransactionForm';

import '../styles/home.css';

class RentField extends Component {
  constructor(props){
    super(props)
    this.state = {
      fieldSelected: {id: null},
    }
  }

  fieldSelectedSentToForm = (field) => {
    this.setState({
      ...this.state,fieldSelected: field
    })
  }

  render() {
    return (
      <div>
        <main role="main" className="container-fluid">
          <div >
            <div >
              <Switch>
                <Route exact path='/rentField' render ={() =>(
                    <Redirect to='/rentField/fieldPicker'/>
                  )}/>
                <AuthenticatedRoute
                  path='/rentField/fieldPicker'
                  render={()=>
                    <FieldPicker
                      fieldSelectedSentToForm={this.fieldSelectedSentToForm}
                      fieldSelected={this.state.fieldSelected}
                    /> }
                  />
                <AuthenticatedRoute
                  path='/rentField/transactionForm'
                  render={(props)=>
                    <NewTransactionForm
                      fieldSelected={this.state.fieldSelected} {...props}
                    /> }
                  />
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
