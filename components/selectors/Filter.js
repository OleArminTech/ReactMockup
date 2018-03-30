import React, { Component } from 'react'

class Filter extends Component {

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
        <div>Filter</div>
      </div>
    )
  }

}

export default Filter
