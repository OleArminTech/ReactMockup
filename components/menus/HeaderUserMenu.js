import React, { Component } from 'react'

class HeaderUserMenu extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      text: ''
    }
  }



  changeHandler(event) {
    event.preventDefault()
    console.log("event: " + event.target.value)
    this.updateText(event.target.value)
  }

  updateText(textUpd) {
    console.log("Update: " + textUpd)
    this.setState({text: textUpd})
    this.props.actions.updateText(textUpd)
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.actions.addItem(this.state.text)
    this.updateText("")
  }

  render() {
    console.log("Props: " + this.state.text)

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
              type="text"
              placeholder="Enter text here"
              value={this.state.text}
              onChange={this.changeHandler.bind(this)}
          />
          <input type="submit" text="Submit" />
      </form>
      </div>
    )
  }

}

export default HeaderUserMenu
