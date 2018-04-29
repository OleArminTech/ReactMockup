import { GENERIC_ACTION } from '../actions/actionTypes'

let customerReducer = function(customer = {
    customerID: 0,
    customerName: "",
    datasets: {},
    users: {}
  }, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...customer, customerName: action.text }

    default:
      return customer;
  }
}

export default customerReducer
