import { GENERIC_ACTION } from '../actions/actionTypes'

let selectedEquipmentReducer = function(selectedEquipment = {
    equipment: {},
    numberOfSelected: 0
  }, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...selectedEquipment, numberOfSelected: action.text }
    default:
      return selectedEquipment;
  }
}

export default selectedEquipmentReducer
