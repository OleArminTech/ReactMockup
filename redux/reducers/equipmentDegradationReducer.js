import { GENERIC_ACTION } from '../actions/actionTypes'

let equipmentDegradationReducer = function(equipmentDegradation = {
    entities: {
      0: {
        equipmentID: 0,
        degradation: 0,
        date: 0,
        value: 0
      }
    },
    IDs: {}
  }, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...equipmentDegradation, value: action.text }

    default:
      return equipmentDegradation;
  }
}

export default equipmentDegradationReducer
