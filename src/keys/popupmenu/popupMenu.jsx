import React, { Component } from 'react'
import Popup from 'reactjs-popup'

class PopupMenu extends Component {

  // constructor(props, context) {
  //   super(props, context)
  //   this.state = {
  //     id: 0,
  //     text: 'Stuff',
  //     done: false
  //   }
  // }
  myCloseFunction(event){
    console.log(this.props)
    this.props.actions.popupClose(false)
  }

  render() {
    return (
      <div>
        <Popup
          modal
          defaultOpen = {true}
          closeOnDocumentClick = {false}
        >
          <span>
            <div>Oy mate, u luki'n at mi nan?</div>
            <button onClick={this.myCloseFunction.bind(this)}>bloddy wanker...</button>
          </span>
        </Popup>
      </div>
    )
  }

}

export default PopupMenu
