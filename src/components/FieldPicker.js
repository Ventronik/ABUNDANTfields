import React, { Component } from 'react';
import { MoonLoader } from 'react-spinners';
//we may have to import the user id. with
import { connect } from 'react-redux';
import { fetchTransactions } from '../actions';                  //This needs to be changed
import { request, withAuthentication } from '../helpers';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Parcels from './Parcels';

class FieldPicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      parcels: [],
      loading: false
    }
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

  render(){
    return (
      <div className="col blog-main main-header">

        {
          this.state.loading ? <MoonLoader /> : <Parcels parcels={this.state.parcels} refreshData={this.getData}/>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTransactions
}, dispatch)

export default connect(null, mapDispatchToProps)(withRouter(withAuthentication(FieldPicker)))
