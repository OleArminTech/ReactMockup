import React, { Component } from 'react'
import '../styles/sideMenu.css'

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
        Sidemenu
      </div>
    )
  }

}

export default SideMenu
