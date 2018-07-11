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
    this.props.fetchTransactions()
    this.setState({loading:true})
    request('/transactions?limit=10&orderByColumn=id&orderDirection=desc')
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
      <div className="col-md-9 blog-main">
        <h1 className="font-italic border-bottom">
          Current Transactions
        </h1>

        {
          this.state.loading ? <MoonLoader /> : <Transactions transactions={this.state.transactions} refreshData={this.getData}/>
        }

        {
         <Transactions />
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

export default connect(null, mapDispatchToProps)(TransactionsFrontPage)
