import React, { Component } from 'react'

class UserProfile extends Component {

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
        <div>UserProfile</div>
      </div>
    )
  }

}

export default UserProfile
