import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import PropTypes from 'prop-types'

class PopupFind extends Component {

  confirmModal = (event) => {
    console.log("MODAL_FIND Pressed: Accept;")
  }

  cancelModal = (event) => {
    console.log("MODAL_FIND Pressed: Close;")
  }

  exitModal = (event) => {
    console.log("MODAL_FIND Exited;")
    this.props.actions.popupConfirm(false)
  }

  render = () => {
    return (
      <div className="popupModalFind">
        <Popup
          modal
          open
          closeOnDocumentClick = {false}
          closeOnEscape = {false}
          onClose={this.exitModal.bind(this)}
        >
          {close => (
            <div className="modal">
              <span>MODAL_FIND:</span>
              <div className="actions">
                <button
                  className="buttonCancel"
                  onClick={() => {
                    this.cancelModal.bind(this)
                    close()
                  }}
                >
                  Cancel
                </button>

                <button
                  className="buttonAccept"
                  onClick={() => {
                    this.confirmModal.bind(this)
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

PopupFind.propTypes = {
  popup: PropTypes.shape({
    openModal: PropTypes.string
  }),
  actions: PropTypes.shape({
    popupClose: PropTypes.func
  })
}

export default PopupFind
