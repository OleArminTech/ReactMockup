import { ADD_SELECTED_EQUIPMENT, REMOVE_SELECTED_EQUIPMENT } from '../actions/actionTypes'

let selectedEquipmentReducer = function(selectedEquipment = {
    entities: {},
    numberOfSelected: 0
  }, action) {
  switch (action.type) {
    case ADD_SELECTED_EQUIPMENT:
      return {
        entities: { ...selectedEquipment.entities, [action.payload]: action.payload },
        numberOfSelected: selectedEquipment.numberOfSelected + 1 }
    case REMOVE_SELECTED_EQUIPMENT:
      return {
        entities: _.omit(selectedEquipment.entities, action.payload),
        numberOfSelected: selectedEquipment.numberOfSelected - 1 }
    default:
      return selectedEquipment;
  }
}

export default selectedEquipmentReducer
