import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import transactionsReducer from './reducers/transactionsReducer'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  transactions: transactionsReducer
})

export default () => createStore(rootReducer, applyMiddleware(logger, thunkMiddleware))
