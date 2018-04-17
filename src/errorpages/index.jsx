import React, { Component } from 'react'

class ErrorPage extends Component {

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
        Error page
      </div>
    )
  }

}

export default ErrorPage
