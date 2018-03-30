let modulesReducer = function(state = {}, action) {
  switch (action.type) {
    case 'TEST':
      return Object.assign({}, state, {
        test: {
          text: action.text,
          id: 0,
          done: action.done
        }
      })

    default:
      return state;
  }
}

export default modulesReducer
