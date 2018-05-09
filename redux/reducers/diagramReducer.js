import { DIAGRAM_COLLAPSE_SKID_TOGGLE,
  DIAGRAM_SHOW_SKID_TOGGLE,
  DIAGRAM_SHOW_EQUIPMENT_DETAILS,
  DIAGRAM_CLUSTER_SELECTED_TOGGLE,
  DIAGRAM_SET_CLUSTER} from '../actions/actionTypes'

let diagramReducer = function(diagram = {
  skidCollapsed: false,
  skidShown: false,
  euipmentDetailShown: false,
  clusterSelected: false,
  cluster: ''
  }, action) {
  switch (action.type) {
    case DIAGRAM_COLLAPSE_SKID_TOGGLE:
      return {...diagram, skidCollapsed: action.payload }
    case DIAGRAM_SHOW_SKID_TOGGLE:
      return {...diagram, skidShown: action.payload }
    case DIAGRAM_SHOW_EQUIPMENT_DETAILS:
      return {...diagram, equipmentDetailsShown: action.payload }
    case DIAGRAM_CLUSTER_SELECTED_TOGGLE:
      return {...diagram, clusterSelected: action.payload }
    case DIAGRAM_SET_CLUSTER:
      return {...diagram, cluster: action.payload }
    default:
      return diagram;
  }
}

export default diagramReducer
