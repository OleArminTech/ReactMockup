import { GENERIC_ACTION } from '../actions/actionTypes'

let equipmentDegredationReducer = function(equipmentDegredation = {}, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...equipmentDegredation, text: action.text }

    default:
      return equipmentDegredation;
  }
}

export default equipmentDegredationReducer
