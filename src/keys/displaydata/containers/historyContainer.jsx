import React, { Component } from 'react'

class HistoryContainer extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      id: 0,
      text: 'Stuff',
      done: false
    }
  }

  render = () => {
    return (
      <div>
        History
      </div>
    )
  }

}

export default HistoryContainer
