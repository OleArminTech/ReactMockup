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
        <div>Diagram</div>
      </div>
    )
  }

}

export default Diagram
