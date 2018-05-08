import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../redux/actions/actions'
import _ from 'lodash'
import vis from 'vis'
import equipment from '../../../res/data/equipment.json'
import connections from '../../../res/data/connections.json'
import connectionTypes from '../../../res/data/connectionTypes.json'
import '../../../styles/diagram.css'
import { initializeNetwork, populateNetwork, addNodes } from '../../scripts/vis/diagramNetworkFunctions'

class Diagram extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      nodes: null,
      edges: null,
      data: null,
      options: null,
      network: null,
      nodesAdded: false,
      timeoutValue: null,
      selectedEquipment: {
        entities: {},
        numberOfSelected: 0
      }
    }
  }

  changeView = () => {
    this.state.network.fit({
      nodes: [100, 200, 300, 1000, 1700, 1800, 3600, 3700, 3800],
      animation: true
    })
  }

  setNetworkListeners = () => {
    this.state.network.on("doubleClick", params => {
      if(_.includes(this.props.selectedEquipment.entities, params.nodes[0])){
        // If allready there, remove
        this.props.actions.removeSelected(params.nodes[0])
      }else{
        // If not there, add
        this.props.actions.addSelected(params.nodes[0])
      }
    })
    this.state.timeoutValue = setTimeout(this.changeView.bind(this), 500)
  }

  componentDidMount = () => {
    if (!this.state.network) {
      this.setState(initializeNetwork(this.state, this.refs.visNetwork))
      this.setState(populateNetwork(equipment, connections, connectionTypes, this.state))
    } else {
      this.state.network.stabilize()
    }
    //this.setState(addNodes(this.state))
    this.state.network.once("stabilizationIterationsDone", () => {
      this.state.timeoutValue = setTimeout(this.setNetworkListeners(), 500)
    })
  }

  componentWillUnmount = () => {
    clearTimeout(this.state.timeoutValue)
  }

  render = () => {
    return (<div className="diagram" ref="visNetwork"/>)
  }
}

Diagram.propTypes = {
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Diagram))
