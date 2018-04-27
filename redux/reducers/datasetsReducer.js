import { GENERIC_ACTION } from '../actions/actionTypes'

let datasetsReducer = function(datasets = {}, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...datasets, text: action.text }

    default:
      return datasets;
  }
}

export default datasetsReducer
