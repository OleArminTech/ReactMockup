import { GENERIC_ACTION } from '../actions/actionTypes'

let selectedEquipmentReducer = function(selectedEquipment = {}, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...selectedEquipment, text: action.text }

    default:
      return selectedEquipment;
  }
}

export default selectedEquipmentReducer
