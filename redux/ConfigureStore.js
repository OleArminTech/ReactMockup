import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './RootReducer'

let finalCreateStore = compose(
  applyMiddleware(thunk, logger)
)(createStore)


export default function configureStore(initialState = {workOrder: {}, itemTest: []}) {
  return finalCreateStore(rootReducer, initialState)
}
