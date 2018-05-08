import React, { Component } from 'react'

class Instructions extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      selectedEquipment: {
        entities: {},
        numberOfSelected: 0
      }
    }
  }

  render = () => {
    return (
      <div>
        Instructions
        { _.map(this.props.selectedEquipment.entities, key => {
          return <div key={key}>{ key }</div>
        })}
      </div>
    )
  }

}

export default Instructions
