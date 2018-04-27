import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

function saveToLocalStorage(state){
  try{
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try{
    const serializedState = localStorage.getItem('state')
    if(serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e)
    return undefined
  }
}

let store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  compose(applyMiddleware(thunk, logger))
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
