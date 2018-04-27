import { GENERIC_ACTION } from '../actions/actionTypes'

let equipmentReducer = function(equipment = {}, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...equipment, text: action.text }

    default:
      return equipment;
  }
}

export default equipmentReducer
