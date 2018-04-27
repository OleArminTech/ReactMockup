import { GENERIC_ACTION } from '../actions/actionTypes'

let connectionsReducer = function(connections = {}, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...connections, text: action.text }

    default:
      return connections;
  }
}

export default connectionsReducer
