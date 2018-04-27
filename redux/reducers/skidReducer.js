import { GENERIC_ACTION } from '../actions/actionTypes'

let skidReducer = function(skid = {}, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...skid, text: action.text }

    default:
      return skid;
  }
}

export default skidReducer
