import React, { Component } from 'react'

class PopupMenu extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      id: 0,
      text: 'Stuff',
      done: false
    }
  }

  render() {
    return (
      <div>
        Popup menu
      </div>
    )
  }

}

export default PopupMenu
