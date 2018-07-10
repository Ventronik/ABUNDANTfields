import {
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAILED,
  ADD_TRANSACTION,
  DELETE_TRANSACTION
} from '../actions'

const initialState = []

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case FETCH_TRANSACTIONS_SUCCESS:
      return [...action.payload]
    case FETCH_TRANSACTIONS_FAILED:
      return action.payload
    case ADD_TRANSACTION:
      return [...state, action.payload]
    case DELETE_TRANSACTION:
      return [...state, action.payload]
    default:
      return state
  }
}
