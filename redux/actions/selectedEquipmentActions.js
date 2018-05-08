import { ADD_SELECTED_EQUIPMENT, REMOVE_SELECTED_EQUIPMENT } from '../actions/actionTypes'

export const addSelected = (value) => {
  return {
    type: ADD_SELECTED_EQUIPMENT,
    payload: value
  };
}

export const removeSelected = (value) => {
  return {
    type: REMOVE_SELECTED_EQUIPMENT,
    payload: value
  };
}
