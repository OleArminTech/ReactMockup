import { DIAGRAM_COLLAPSE_SKID_TOGGLE, DIAGRAM_SHOW_SKID_TOGGLE, DIAGRAM_SHOW_EQUIPMENT_DETAILS } from '../actions/actionTypes'

export const collapseSkid = (payload) => {
  return {
    type: DIAGRAM_COLLAPSE_SKID_TOGGLE,
    payload: payload
  }
}

export const showSkid = (payload) => {
  return {
    type: DIAGRAM_SHOW_SKID_TOGGLE,
    payload: payload
  }
}

export const showEquipmentDetail = (payload) => {
  return {
    type: DIAGRAM_SHOW_EQUIPMENT_DETAILS,
    payload: payload
  }
}
