import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import PropTypes from 'prop-types'

class PopupFilter extends Component {

  confirmModal(event){
    console.log("MODAL_FILTER Pressed: Accept;")
  }

  cancelModal(event){
    console.log("MODAL_FILTER Pressed: Close;")
  }

  exitModal(event){
    console.log("MODAL_FILTER Exited;")
    this.props.actions.popupConfirm(false)
  }

  render() {
    return (
      <div className="popupModalFilter">
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

PopupFilter.propTypes = {
  popup: PropTypes.shape({
    openModal: PropTypes.string
  }),
  actions: PropTypes.shape({
    popupClose: PropTypes.func
  })
}

export default PopupFilter
