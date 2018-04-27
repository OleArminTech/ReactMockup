import { GENERIC_ACTION } from '../actions/actionTypes'

export const genericAction = (text) => {
  return {
    type: GENERIC_ACTION,
    text: text
  };
}
