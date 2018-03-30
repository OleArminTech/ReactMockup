import React, { Component } from 'react'

class SideBar extends Component {

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
        <div>SideBar</div>
      </div>
    )
  }

}

export default SideBar
