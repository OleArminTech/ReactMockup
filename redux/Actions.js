let actions = {
  enterWorkOrder: function(text) {
    return {
      type: 'ENTER_WORKORDER',
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
