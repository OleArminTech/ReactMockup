import { ADD_SELECTED_EQUIPMENT,
  REMOVE_SELECTED_EQUIPMENT,
  ADD_GROUP_EQUIPMENT,
  REMOVE_GROUP_EQUIPMENT } from '../actions/actionTypes'

export const addSelected = (value) => {
  return {
    type: ADD_SELECTED_EQUIPMENT,
    payload: value
  };
}

export const addGroup = (value, size) => {
  return {
    type: ADD_GROUP_EQUIPMENT,
    payload: value,
    selected: size
  };
}

export const removeSelected = (value) => {
  return {
    type: REMOVE_SELECTED_EQUIPMENT,
    payload: value
  };
}

export const removeGroup = (value, size) => {
  return {
    type: REMOVE_GROUP_EQUIPMENT,
    payload: value,
    selected: size
  };
}
