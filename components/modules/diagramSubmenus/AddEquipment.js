import React, { Component } from 'react'

class AddEquipment extends Component {

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
        <div>AddEquipment</div>
      </div>
    )
  }

}

export default AddEquipment
