import React, { Component } from 'react'
import { MoonLoader } from 'react-spinners'
//we may have to import the user id. with
import { connect } from 'react-redux'
import { fetchTransactions } from '../actions'                  //This needs to be changed
import { request, withAuthentication } from '../helpers'
import { bindActionCreators } from 'redux'
import Parcels from './Parcels'

class MyFields extends Component {
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
      console.log('PARCELS: ', this.state.parcels)
    })
    .catch(error => {
      this.setState({loading:false})
    })
  }

  render(){
    return (
      <div>
        <h1 className="font-italic border-bottom">
          Your list of Fields
        </h1>

        {
          this.state.loading ? <MoonLoader /> : <Parcels parcels={this.state.parcels} refreshData={this.getData}/>
        }

        <nav className="blog-pagination">
          <a className="btn btn-outline-primary">Older</a>
          <a className="btn btn-outline-secondary disabled">Newer</a>
        </nav>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTransactions
}, dispatch)

export default connect(null, mapDispatchToProps)(withAuthentication(MyFields))
