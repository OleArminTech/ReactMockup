import React, { Component } from 'react'

class CollapseHPpack extends Component {

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
        <div>CollapseHPpack</div>
      </div>
    )
  }

}

export default CollapseHPpack
