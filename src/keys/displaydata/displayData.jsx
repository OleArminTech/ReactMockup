import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../redux/actions/actions'
import HistoryContainer from './containers/historyContainer'
import Instructions from './containers/instructions'
import Ranking from './containers/ranking'

class DisplayData extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      selectedEquipment: {
        entities: {},
        numberOfSelected: 0
      }
    }
  }

  getContainer = () => {
    if(this.props.location.pathname == "/ranking") {
      return <Ranking />
    } else if(this.props.location.pathname == "/history") {
      return <HistoryContainer />
    } else if(this.props.location.pathname == "/instructions") {
      return <Instructions selectedEquipment={this.props.selectedEquipment} />
    } else {
      return null
    }
  }

  render = () => {
    return (
      <div>
        { this.getContainer() }
      </div>
    )
  }
}

DisplayData.propTypes = {
  pathname: PropTypes.string,
  selectedEquipment: PropTypes.shape({
    entities: PropTypes.object,
    numberOfSelected: PropTypes.number
  })
}

const mapStateToProps = (state) => {
  return { selectedEquipment: state.selectedEquipment};
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DisplayData))
