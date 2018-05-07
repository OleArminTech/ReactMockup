import { ADD_SELECTED_EQUIPMENT, REMOVE_SELECTED_EQUIPMENT } from '../actions/actionTypes'

let selectedEquipmentReducer = function(selectedEquipment = {
    entities: {},
    numberOfSelected: 0
  }, action) {
  switch (action.type) {
    case ADD_SELECTED_EQUIPMENT:
      let addEntities = { ...selectedEquipment.entities, [action.payload]: action.payload }
      let addSelected = _.size(addEntities)
      return { entities: addEntities, numberOfSelected: addSelected }
    case REMOVE_SELECTED_EQUIPMENT:
      let removeEntities = _.omit(selectedEquipment.entities, action.payload)
      let removeSelected = _.size(removeEntities)
      return { entities: removeEntities, numberOfSelected: removeSelected }
    default:
      return selectedEquipment;
  }
}

export default selectedEquipmentReducer
