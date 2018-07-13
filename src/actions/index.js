import { request } from '../helpers'

export const ADD_TRANSACTION = "ADD_TRANSACTION"
export const FETCH_TRANSACTIONS_SUCCESS = "FETCH_TRANSACTIONS_SUCCESS"
export const FETCH_TRANSACTIONS_FAILED = "FETCH_TRANSACTIONS_FAILED"
export const DELETE_TRANSACTION = "DELETE_TRANSACTION"
export const EDIT_TRANSACTION = "EDIT_TRANSACTION"
export const ADD_FIELD = "ADD_FIELD"

export const addTransaction = (title, body ) => {
  let newTransaction = {
    // title: title,
    // body: body
  }
  return dispatch => {
    request(`/transactions`, `post`, newTransaction)
    .then(transaction => dispatch({
      type: ADD_TRANSACTION,
      payload: transaction
    }))
  }
}

export const fetchTransactions = () => {
  return dispatch => {
    request('/transactions?limit=10&orderByColumn=id&orderDirection=desc')
      .then(transaction => dispatch({
        type: FETCH_TRANSACTIONS_SUCCESS,
        payload: transaction.data.transactions
      }))
  }
}

export const deleteTransaction = (id) => {
  return dispatch => {
    request(`/transactions/${id}`, 'delete')
    .then(transactions => dispatch({
      type: DELETE_TRANSACTION,
      payload: transactions
    }))
    .then(response => {
      dispatch(fetchTransactions())
    })
  }
}

export const editTransaction = (id) =>{
  return dispatch => {
    request(`/transactions/${id}`, 'put')
    .then(transaction=> dispatch({
      type: EDIT_TRANSACTION,
      payload: transaction
    }))
    .then(response=>{
      dispatch(fetchTransactions())
    })
  }
}

export const addField = (location, name ) => {
  let newParcel = {
    location,
    name
  }
  return dispatch => {
    request(`/parcels`, `post`, newParcel)
    .then(field => dispatch({
      type: ADD_FIELD,
      payload: field
    }))
  }
}
