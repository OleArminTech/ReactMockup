import { GENERIC_ACTION } from '../actions/actionTypes'

let customerReducer = function(customer = {}, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...customer, text: action.text }

    default:
      return customer;
  }
}

export default customerReducer
