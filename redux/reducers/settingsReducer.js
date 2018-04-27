import { GENERIC_ACTION } from '../actions/actionTypes'

let settingsReducer = function(settings = {}, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...settings, text: action.text }

    default:
      return settings;
  }
}

export default settingsReducer
