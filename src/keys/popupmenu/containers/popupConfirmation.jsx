import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import PropTypes from 'prop-types'

class PopupConfirmation extends Component {

  confirmModal(event){
    console.log("Modal Pressed: Accept;")
  }

  cancelModal(event){
    console.log("Modal Pressed: Close;")
  }

  exitModal(event){
    console.log("Modal Exited;")
    this.props.actions.popupConfirm(false)
  }

  render() {
    return (
      <div className="popupModalConfirmation">
        <Popup
          modal
          open
          closeOnDocumentClick = {false}
          closeOnEscape = {false}
          onClose={this.exitModal.bind(this)}
        >
          {close => (
            <div className="modal">
              <span>Are you sure?</span>
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

PopupConfirmation.propTypes = {
  popup: PropTypes.shape({
    openModal: PropTypes.string
  }),
  actions: PropTypes.shape({
    popupClose: PropTypes.func
  })
}

export default PopupConfirmation
