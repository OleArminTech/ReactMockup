let modulesReducer = function(textTest = {}, action) {
  switch (action.type) {
    case 'UPDATETEXT':
      console.log("Reducer: " + action.text)
      return {...textTest, text: action.text }

    default:
      return textTest;
  }
}

export default modulesReducer
