import {
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAILED,
  ADD_TRANSACTION,
  DELETE_TRANSACTION
} from '../actions'
import {
  USER_SIGNUP_FAILED
} from '../actions/auth'


const initialState = {
  showSignupError: false,
};

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
    case USER_SIGNUP_FAILED:
      return {...state, isLoading: false, showSignupError: true};
    default:
      return state
  }
}
