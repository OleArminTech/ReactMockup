import React, { Component } from 'react'

class HeaderBar extends Component {

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
        <div>HeaderBar</div>
      </div>
    )
  }

}

export default HeaderBar
