import { POPUP_SUBMIT, POPUP_CLOSE, POPUP_TYPE} from '../actions/actionTypes'

let popupReducer = function(popup = {
    openModal: "",
  }, action) {
  switch (action.type) {
    case POPUP_SUBMIT:
      return {...popup, text: action.text }
    case POPUP_CLOSE:
      return {...popup, openModal: "" }
    case POPUP_TYPE:
      return {...popup, openModal: action.payload }
    default:
      return popup;
  }
}

export default popupReducer
