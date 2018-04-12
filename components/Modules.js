import React, { Component } from 'react'
import '../styles/modules.css'

class Modules extends Component {

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
        Modules
      </div>
    )
  }

}

export default Modules
