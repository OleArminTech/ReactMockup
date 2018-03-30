import React, { Component } from 'react'

class AddConnection extends Component {

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
        <div>AddConnection</div>
      </div>
    )
  }

}

export default AddConnection
