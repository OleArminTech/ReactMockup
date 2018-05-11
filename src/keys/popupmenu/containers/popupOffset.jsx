import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import PropTypes from 'prop-types'
import Offset from '../components/offset'

class PopupOffset extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  acceptModal = (event) => {
    console.log("MODAL_OFFSET Pressed: Accept;")
    this.setState({ open: false })
  }

  cancelModal = (event) => {
    console.log("MODAL_OFFSET Pressed: Close;")
    this.setState({ open: false })
  }

  exitModal = (event) => {
    this.props.actions.popupConfirm(false)
  }

  render = () => {
    return (
      <div className="popupModalOffset">
        <Popup
          modal
          open = {this.state.open}
          closeOnDocumentClick = {false}
          closeOnEscape = {false}
          onClose = {this.exitModal.bind(this)}
        >
          {close => (
            <Offset
              acceptModal = {this.acceptModal}
              cancelModal = {this.cancelModal}
            />
          )}

        </Popup>
      </div>
    )
  }

}

PopupOffset.propTypes = {
  popup: PropTypes.shape({
    openModal: PropTypes.string
  }),
  actions: PropTypes.shape({
    popupClose: PropTypes.func
  })
}

export default PopupOffset
