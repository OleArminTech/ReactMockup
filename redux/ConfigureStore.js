import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

let finalCreateStore = compose(
  applyMiddleware(thunk, logger)
)(createStore)


export default function configureStore(initialState = {workOrder: {}, itemTest: [], history: [], instructions: []}) {
  return finalCreateStore(rootReducer, initialState)
}
