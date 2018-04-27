import { combineReducers } from 'redux'
import SelectorReducer from './selectorReducer'
import ModulesReducer from './modulesReducer'

export default combineReducers({
  workOrder: ModulesReducer,
  itemTest: SelectorReducer
})
