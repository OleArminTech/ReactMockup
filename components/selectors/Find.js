import React, { Component } from 'react'

class Find extends Component {

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
        <div>Find</div>
      </div>
    )
  }

}

export default Find
