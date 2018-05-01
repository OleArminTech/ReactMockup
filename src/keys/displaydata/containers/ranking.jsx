import React, { Component } from 'react'

class Ranking extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      id: 0,
      text: '',
      done: false
    }
  }

  render() {
    return (
      <div>
        Ranking
      </div>
    )
  }
}

export default Ranking
