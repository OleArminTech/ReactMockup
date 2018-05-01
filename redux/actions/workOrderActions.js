import { ENTER_WORKORDER, GENERIC_ACTION_2 } from '../actions/actionTypes'

export const enterWorkOrder = (text) => {
  return {
    type: ENTER_WORKORDER,
    text: text
  };
}

export const genericAction2 = (text) => {
  return {
    type: GENERIC_ACTION_2,
    text: text
  };
}
