import React, { Component } from 'react'

class Path extends Component {

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
        <div>Path</div>
      </div>
    )
  }

}

export default Path
