import React, { Component } from 'react'

class HeaderUserMenu extends Component {

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
        <div>HeaderUserMenu</div>
      </div>
    )
  }

}

export default HeaderUserMenu
