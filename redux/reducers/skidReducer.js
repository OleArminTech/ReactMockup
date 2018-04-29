import { GENERIC_ACTION } from '../actions/actionTypes'

let skidReducer = function(skid = {
    entities: {
      0: {
        skidID: 0,
        skidName: "",
        equipment: {}
      }
    },
    IDs: {}
  }, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...skid, skidName: action.text }

    default:
      return skid;
  }
}

export default skidReducer
