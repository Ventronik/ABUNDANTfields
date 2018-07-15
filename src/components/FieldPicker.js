import React, { Component } from 'react';
import { MoonLoader } from 'react-spinners';
//we may have to import the user id. with
import { connect } from 'react-redux';
import { fetchTransactions } from '../actions';                  //This needs to be changed
import { request, withAuthentication } from '../helpers';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import tractorGray from '../assets/tractor-gray.png';
import tractorBlue from '../assets/tractor-blue.png';
import Parcels from './Parcels';

class FieldPicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      parcels: [],
      loading: false,
      fieldSelected: null,
      buttonDisabled: true
    }
  }

  componentDidMount(){
    this.getData()
  }

  fieldSelectedSentToForm = (fieldNumber) => {
    this.setState({
      ...this.state,fieldSelected: fieldNumber
      // buttonDisabled: !this.state.buttonDisable
    })
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
    console.log(this.props)
  }

  render(){
    return (
      <div className="col blog-main main-header">
        <div>
          <h1 className="font-italic border-bottom">
            Select the field you wish to lease
          </h1>
          <Button disabled={!this.state.fieldSelected} onClick={()=>console.log(this.state)}>Choose Field</Button>
        </div>
        {
          this.state.loading ?
          <MoonLoader /> :
            
          <Parcels
            parcels={this.state.parcels}
            refreshData={this.getData}
            fieldSelected={this.state.fieldSelected}
            fieldSelectedSentToForm={this.fieldSelectedSentToForm}/>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTransactions
}, dispatch)

export default connect(null, mapDispatchToProps)(withRouter(withAuthentication(FieldPicker)))
