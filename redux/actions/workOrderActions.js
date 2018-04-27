import { ENTER_WORKORDER } from '../actions/actionTypes'

export const enterWorkOrder = (text) => {
  return {
    type: ENTER_WORKORDER,
    text: text
  };
}
