import { GENERIC_ACTION } from '../actions/actionTypes'

let equipmentReducer = function(equipment = {
    entities: {
      0: {
        equipmentID: 0,
        componentID: "",
        equipmentName: "",
        skidID: 0,
        dicipline: "",
        type: "",
        subtype: "",
        equipmentdegradeID: 0
      }
    },
    IDs: {}
  }, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...equipment, equipmentName: action.text }

    default:
      return equipment;
  }
}

export default equipmentReducer
