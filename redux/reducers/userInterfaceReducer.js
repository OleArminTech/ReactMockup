import { GENERIC_ACTION } from '../actions/actionTypes'

let userInterfaceReducer = function(userInterface = {}, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...userInterface, text: action.text }

    default:
      return userInterface;
  }
}

export default userInterfaceReducer
