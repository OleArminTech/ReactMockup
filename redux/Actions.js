let actions = {
  testAction: function(id) {
    return {
      type: 'TEST',
      id: id,
      text: "React and redux did it's magic!",
      done: true
    }
  }
}

export default actions
