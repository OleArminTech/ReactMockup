import React, { Component } from 'react'

class DiagramSubmenu extends Component {

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
        DiagramSubmenu
      </div>
    )
  }

}

export default DiagramSubmenu
