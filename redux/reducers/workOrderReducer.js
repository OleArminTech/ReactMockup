import { ENTER_WORKORDER } from '../actions/actionTypes'

let workOrderReducer = function(workOrder = {
    workOrderName: "",
    type: ""
  }, action) {
  switch (action.type) {
    case ENTER_WORKORDER:
      return {...workOrder, workOrderName: action.text }

    default:
      return workOrder;
  }
}

export default workOrderReducer
