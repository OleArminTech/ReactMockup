import { ADD_SELECTED_EQUIPMENT,
  REMOVE_SELECTED_EQUIPMENT,
  ADD_GROUP_EQUIPMENT,
  REMOVE_GROUP_EQUIPMENT } from '../actions/actionTypes'

let selectedEquipmentReducer = function(selectedEquipment = {
    entities: {},
    numberOfSelected: 0
  }, action) {
  switch (action.type) {
    case ADD_SELECTED_EQUIPMENT:
      return {
        entities: { ...selectedEquipment.entities, [action.payload]: action.payload },
        numberOfSelected: selectedEquipment.numberOfSelected + 1 }
    case ADD_GROUP_EQUIPMENT:
      return {
        entities: { ...selectedEquipment.entities, ...action.payload },
        numberOfSelected: selectedEquipment.numberOfSelected + action.selected }
    case REMOVE_SELECTED_EQUIPMENT:
      return {
        entities: _.omit(selectedEquipment.entities, action.payload),
        numberOfSelected: selectedEquipment.numberOfSelected - 1 }
    case REMOVE_GROUP_EQUIPMENT:
      return {
        entities: _.omit(selectedEquipment.entities, action.payload),
        numberOfSelected: selectedEquipment.numberOfSelected - action.selected }
    default:
      return selectedEquipment;
  }
}

export default selectedEquipmentReducer
