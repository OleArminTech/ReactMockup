import { GENERIC_ACTION } from '../actions/actionTypes'

let userReducer = function(user = {}, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...user, text: action.text }

    default:
      return user;
  }
}

export default userReducer
