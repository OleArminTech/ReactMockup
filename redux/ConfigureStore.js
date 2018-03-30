import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './Reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
  applyMiddleware(thunk, logger)
)(createStore)


export default function configureStore(initialState = null) {
  return finalCreateStore(reducers, initialState)
}
