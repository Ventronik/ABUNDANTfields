import React, { Component } from 'react';
import { MoonLoader } from 'react-spinners';
//we may have to import the user id. with
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

import { fetchTransactions } from '../actions';
import { request, withAuthentication, AuthenticatedRoute } from '../helpers';
import Parcels from './Parcels';
import NewTransactionForm from './NewTransactionForm';

class FieldPicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      parcels: [],
      loading: false,
      modal: false,
      removeSelected: false,
      closeAll: false,
      dailySelector: false,
      value: [],
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
    this.getData()
  }

  getData = () => {
    const id = this.props.authState.id
    this.setState({loading:true})
    request(`/users/${id}/parcels`)
    .then((parcels) => {
      this.setState({
        parcels:parcels.data.userParcels,
        loading: false
      })
    })
    .catch(error => {
      this.setState({loading:false})
    })
  }
  onParcelSelection = () => {
    this.props.history.push('/rentField/transactionForm')
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render(){
    return (
      <div className="col main-header">
        <div>
          <h1 className="font-italic border-bottom">
            Select the field you wish to lease
            <span>    <Button color="info" disabled={!this.props.fieldSelected} onClick={()=>this.onParcelSelection()}>Choose Field</Button></span>
          </h1>
        </div>
        {
          this.state.loading ?
          <MoonLoader /> :
          <Switch>
            <AuthenticatedRoute

              path='/rentField/transactionForm'
              render={(props) =>(
                <NewTransactionForm
                {...props}
                parcels={this.state.parcels}
                refreshData={this.getData}
                fieldSelected={this.props.fieldSelected}
                fieldSelectedSentToForm={this.props.fieldSelectedSentToForm}
              />
              )}
            />
            <AuthenticatedRoute

              path='/rentField/fieldPicker'
              render={(props)  =>
                <Parcels
                  {...props}
                  parcels={this.state.parcels}
                  refreshData={this.getData}
                  fieldSelected={this.props.fieldSelected}
                  fieldSelectedSentToForm={this.props.fieldSelectedSentToForm}
                />
            }/>
          </Switch>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTransactions
}, dispatch)

export default connect(null, mapDispatchToProps)(withRouter(withAuthentication(FieldPicker)))
