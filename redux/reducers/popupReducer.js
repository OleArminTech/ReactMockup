<<<<<<< current
import { POPUP_SUBMIT, POPUP_CLOSE, POPUP_TYPE } from '../actions/actionTypes'

let popupReducer = function(popup = {
    type: 0,
    text: "",
    openModal: "INIT",
  }, action) {
  switch (action.type) {
    case POPUP_SUBMIT:
      return {...popup, text: action.text }
    case POPUP_CLOSE:
      return {...popup, openModal: action.payload }
    case POPUP_TYPE:
      return {...popup, openModal: action.payload }
    default:
      return popup;
  }
}

export default popupReducer
=======
import { ENTER_WORKORDER } from '../actions/actionTypes'

let workOrderReducer = function(workOrder = {
    workOrderID: 0,
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
>>>>>>> before discard
