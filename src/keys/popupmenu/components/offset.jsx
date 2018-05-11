import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import PropTypes from 'prop-types'

class Offset extends Component {
  render = () => {
    return (
      <div className="offset">
        <span>Offset:</span>
        <div className="actions">
          <button
            className="buttonCancel"
            onClick={() => this.props.cancelModal()}
          >
            Cancel
          </button>

          <button
            className="buttonAccept"
            onClick={() => this.props.acceptModal()}
          >
            Accept
          </button>
        </div>
      </div>
    )
  }

}

Offset.propTypes = {
  actions: PropTypes.shape({
    acceptModal: PropTypes.func,
    cancelModal: PropTypes.func
  })
}

export default Offset
