import { combineReducers } from 'redux'
import SelectorReducer from './SelectorReducer'
import ModulesReducer from './ModulesReducer'

export default combineReducers({
  SelectorReducer,
  ModulesReducer
})
