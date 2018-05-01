import { GENERIC_ACTION } from '../actions/actionTypes'

let userReducer = function(user = {
    userID: 0,
    username: "",
    password: "",
    customers: {}
  }, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...user, name: action.text }

    default:
      return user;
  }
}

export default userReducer
