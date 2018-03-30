import React, { Component } from 'react'

class HeaderSettingsMenu extends Component {

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
        <div>HeaderSettingsMenu</div>
      </div>
    )
  }

}

export default HeaderSettingsMenu
