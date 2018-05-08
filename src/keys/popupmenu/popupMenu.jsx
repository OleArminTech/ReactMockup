import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import PropTypes from 'prop-types'


import PopupConfirmation from './containers/popupConfirmation'
import PopupFind from './containers/popupFind'
import PopupFilter from './containers/popupFilter'
import PopupPath from './containers/PopupPath'
import PopupOffset from './containers/popupOffset'

class PopupMenu extends Component {
  acceptModal = (event) => {
    console.log("Modal Pressed: Accept;")
  }

  closeModal = (event) => {
    console.log(this.props)
    //this.props.actions.popupClose(false)
  }

  exitModal = (event) => {
    console.log("Modal Exited;")
    this.props.actions.popupClose(false)
  }

  modalSwitch(type){
    switch(type) {
        case "MODAL_FIND":
            return (
              <PopupFind popup={this.props.popup} actions={this.props.actions}/>
            )
        case "MODAL_FILTER":
            return (
              <PopupFilter popup={this.props.popup} actions={this.props.actions}/>
            )
        case "MODAL_OFFSET":
            return (
              <PopupOffset popup={this.props.popup} actions={this.props.actions}/>
            )

        case "MODAL_PATH":
            return (
              <PopupPath popup={this.props.popup} actions={this.props.actions}/>
            )
        default:
            return <div>D</div>;
    }
  }
  
  render = () => {
    return (
      <div className="Modal">
        <Popup
          modal
          open
          onClose={this.exitModal.bind(this)}
        >
          {close => (
            <div className="modal">
              {/* Small X in crner */}
              <a className="close" onClick={close}>
                &times;
              </a>

              {this.modalSwitch(this.props.popup.openModal)}

              <div className="actions">
                <button
                  className="buttonCancel"
                  onClick={() => {
                    console.log("Modal Cancel")
                    close()
                  }}
                >
                  Cancel
                </button>

                <button
                  className="buttonAccept"
                  onClick={() => {
                    console.log("Modal Accept")
                    close()
                  }}
                >
                  Accept
                </button>
            </div>
            </div>
          )}
        </Popup>
      </div>
    )
  }

}

PopupMenu.propTypes = {
  popup: PropTypes.shape({
    openModal: PropTypes.string
  }),
  actions: PropTypes.shape({
    popupClose: PropTypes.func
  })
}

export default PopupMenu
