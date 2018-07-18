import React from 'react';
import { connect } from 'react-redux';

import Transaction from './Transaction'

const Transactions = ({transactions, getData}) => {
  return (
    <div>
      {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} getData={getData}/>)}
    </div>
  )
}

const mapStateToProps = state => ({
    // transactions: state.transactions
})

export default connect(mapStateToProps)(Transactions)
