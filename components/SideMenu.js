import React, { Component } from 'react'

class SideMenu extends Component {

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
        <div>SideMenu</div>
      </div>
    )
  }

}

export default SideMenu
