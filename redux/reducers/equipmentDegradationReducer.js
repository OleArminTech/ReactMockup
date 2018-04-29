import { GENERIC_ACTION } from '../actions/actionTypes'

let equipmentDegradationReducer = function(equipmentDegradation = {}, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...equipmentDegradation, text: action.text }

    default:
      return equipmentDegradation;
  }
}

export default equipmentDegradationReducer
