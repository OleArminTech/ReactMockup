import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import PropTypes from 'prop-types'

class PopupMenu extends Component {

  // constructor(props, context) {
  //   super(props, context)
  //   this.state = {
  //     id: 0,
  //     text: 'Stuff',
  //     done: false
  //   }
  // }
  closeModal(event){
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
            <div>This is a Modal</div>
            <button onClick={this.closeModal.bind(this)}>Close</button>
          </span>
        </Popup>
      </div>
    )
  }

}

PopupMenu.propTypes = {
  popup: PropTypes.shape({
    openModal: PropTypes.string
  })
}

export default PopupMenu
