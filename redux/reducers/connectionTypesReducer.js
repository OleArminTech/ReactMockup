import { GENERIC_ACTION } from '../actions/actionTypes'

let connectionTypesReducer = function(connectionTypes = {}, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...connectionTypes, text: action.text }

    default:
      return connectionTypes;
  }
}

export default connectionTypesReducer
