import {
  FETCH_PARCELS_SUCCESS,
  FETCH_PARCELS_FAILED,
  FETCH_PARCEL_SUCCESS,
  FETCH_PARCEL_FAILED,
  ADD_PARCEL,
  DELETE_PARCEL
} from '../actions'


const initialState = [
  {showSignupError: false},
];

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
