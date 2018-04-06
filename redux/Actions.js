let actions = {
  updateText: function(text) {
    console.log("Action: " + text)
    return {
      type: 'UPDATETEXT',
      text: text
    }
  },

  addItem: function(text) {
    return{
      type: 'ADDITEM',
      text: text
    }
  }
}

export default actions
