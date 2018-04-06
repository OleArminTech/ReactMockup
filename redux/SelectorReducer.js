function getId(items) {
  return items.reduce((maxId, item) => {
    return Math.max(item.id, maxId)
  }, -1) + 1
}

let selectorReducer = function(itemTest = [], action) {
  switch (action.type) {
    case 'ADDITEM':
      return [{
        id: getId(itemTest),
        text: action.text
      }, ...itemTest]

    default:
      return itemTest;
  }
}

export default selectorReducer
