import { DIAGRAM_COLLAPSE_SKID_TOGGLE,
  DIAGRAM_SHOW_SKID_TOGGLE,
  DIAGRAM_SHOW_EQUIPMENT_DETAILS,
  DIAGRAM_CLUSTER_SELECTED_TOGGLE,
  DIAGRAM_SET_CLUSTER} from '../actions/actionTypes'

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

export const selectCluster = (payload) => {
  return {
    type: DIAGRAM_CLUSTER_SELECTED_TOGGLE,
    payload: payload
  }
}

export const setCluster = (payload) => {
  return {
    type: DIAGRAM_SET_CLUSTER,
    payload: payload
  }
}
