let modulesReducer = function(workOrder = {}, action) {
  switch (action.type) {
    case 'ENTER_WORKORDER':
      return {...workOrder, text: action.text }

    default:
      return workOrder;
  }
}

export default modulesReducer
