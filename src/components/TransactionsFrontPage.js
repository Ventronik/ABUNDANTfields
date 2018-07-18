import React, { Component } from 'react'
import { MoonLoader } from 'react-spinners'

import { connect } from 'react-redux'
import { fetchTransactions } from '../actions'
import { request } from '../helpers'
import { bindActionCreators } from 'redux'
import Transactions from './Transactions'

class TransactionsFrontPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      transactions: [],
      loading: false
    }
  }

  componentDidMount(){
    this.getData()
  }

  getData = () => {
    this.setState({loading:true})
    // this.props.fetchTransactions()
    request('/transactions?renter_id=null&orderByColumn=id&orderDirection=desc')
    .then((transactions) => {
      this.setState({
        transactions:transactions.data.transactions,
        loading: false
      })

    })
    .catch(error => {
      this.setState({loading:false})
    })
  }

  render(){
    return (
      <div>
        <h1 className="font-italic border-bottom">
          Fields Available
        </h1>

        {
          this.state.loading ?
            <MoonLoader /> :
            <Transactions transactions={this.state.transactions} getData={this.getData}/>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTransactions
}, dispatch)

export default connect(null, mapDispatchToProps)(TransactionsFrontPage)
