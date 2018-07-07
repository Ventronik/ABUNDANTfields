import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import postsReducer from './reducers/postsReducer'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  posts: postsReducer
})

export default () => createStore(rootReducer, applyMiddleware(logger, thunkMiddleware))
