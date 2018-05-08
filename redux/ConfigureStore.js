import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer'

const  saveToLocalStorage = (state) => {
  let persistantStates = {
    workOrder: state.workOrder,
    userInterface: state.userInterface,
    settings: state.settings
   }
  try{
    const serializedState = JSON.stringify(persistantStates)
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e)
  }
}

const loadFromLocalStorage = () => {
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
  compose(applyMiddleware(logger))
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
