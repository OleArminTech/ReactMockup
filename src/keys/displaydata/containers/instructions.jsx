import React, { Component } from 'react'

class Instructions extends Component {

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
        Instructions
      </div>
    )
  }

}

export default Instructions
