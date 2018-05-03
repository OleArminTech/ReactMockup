<<<<<<< current
import { GENERIC_ACTION, GENERIC_ACTION_2 } from '../actions/actionTypes'

export const genericAction = (text) => {
  return {
    type: GENERIC_ACTION,
    text: text
  };
}

export const genericAction2 = (text) => {
  return {
    type: GENERIC_ACTION_2,
    text: text
  };
}
=======
import {GENERIC_ACTION, GENERIC_ACTION_2} from '../actions/actionTypes'

export const genericAction = (text) => {
  return {type: GENERIC_ACTION, text: text};
}

export const genericAction2 = (text) => {
  return {type: GENERIC_ACTION_2, text: text};
}
>>>>>>> before discard
