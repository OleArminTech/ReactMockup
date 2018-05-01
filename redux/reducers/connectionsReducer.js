import { GENERIC_ACTION } from '../actions/actionTypes'

let connectionsReducer = function(connections = {
    entities: {
      0: {
        equipmentIDfrom: 0,
        equipmentIDto: 0,
        connectiontypeID: 0
      }
    },
    IDs: {}
  }, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...connections, equipmentIDfrom: action.text }

    default:
      return connections;
  }
}

export default connectionsReducer
