import { GENERIC_ACTION } from '../actions/actionTypes'

let connectionTypesReducer = function(connectionTypes = {
    entities: {
      0: {
        connectiontypeID: 0,
        connectiontype: "",
        color: ""
      }
    },
    IDs: {}
  }, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...connectionTypes, color: action.text }

    default:
      return connectionTypes;
  }
}

export default connectionTypesReducer
