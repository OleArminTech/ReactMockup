import React, { Component } from 'react'

class Diagram extends Component {

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
        Diagram
      </div>
    )
  }

}

export default Diagram
