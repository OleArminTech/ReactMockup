import { POPUP_SUBMIT, POPUP_CLOSE, POPUP_TYPE} from '../actions/actionTypes'

export const popupSubmit = (text) => {
  return {
    type: POPUP_SUBMIT,
    text: text
  }
}

export const popupClose = (value) => {
  return {
    type: POPUP_CLOSE,
    payload: value//REMOVE?
  }
}

export const popupConfirm = (value) => {
  return {
    type: POPUP_CLOSE,
    payload: value//REMOVE?
  }
}

export const popupType = (value) => {
  return {
    type: POPUP_TYPE,
    payload: value
  }
}
