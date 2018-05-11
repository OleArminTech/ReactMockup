import { POPUP_SUBMIT, POPUP_CLOSE, POPUP_TYPE, POPUP_TEXTBOX_TOGGLE } from '../actions/actionTypes'

let popupReducer = function(popup = {
    type: 0,
    text: "",
    inputBool: [false, false, false, false, false],
    inputText: ["A", "B", "C", "D", "E"],
    openModal: "",
  }, action) {
  switch (action.type) {
    case POPUP_SUBMIT:
      return {...popup, text: action.text }
    case POPUP_CLOSE:
      return {...popup, openModal: "" }
    case POPUP_TYPE:
      return {...popup, openModal: action.payload }
    case POPUP_TEXTBOX_TOGGLE:
      let tempInputBool = popup.inputBool.slice()
      tempInputBool[action.payload-1] = !tempInputBool[action.payload-1]
      return {...popup,
        inputBool: tempInputBool}


    default:
      return popup;
  }
}

export default popupReducer
