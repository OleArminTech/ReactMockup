import { GENERIC_ACTION } from '../actions/actionTypes'

let displayDataReducer = function(displayData = {
    equipment: {},
    numberOfSelected: 0
  }, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...displayData, numberOfSelected: action.text }
    default:
      return displayData;
  }
}

export default displayDataReducer
