import { GENERIC_ACTION } from '../actions/actionTypes'

let datasetsReducer = function(datasets = {
    datasetID: 0,
    datasetFile: "",
    datasetName: ""
  }, action) {
  switch (action.type) {
    case GENERIC_ACTION:
      return {...datasets, datasetName: action.text }

    default:
      return datasets;
  }
}

export default datasetsReducer
