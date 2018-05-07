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
      entities: null,
      numberOfSelected: 0
    }
  }

  changeView() {
    this.state.network.fit({
      nodes: [100, 200, 300, 1000, 1700, 1800, 3600, 3700, 3800],
      animation: true
    })
  }

  setNetworkListeners(){
    this.state.network.on("doubleClick", params => {
      console.log("Node: " + params.nodes)
      console.log("Props: " + this.props.selectedEquipment.numberOfSelected)
      if(!_.includes(this.props.entities, params.nodes)){
        console.log("Add node to selection")
        this.props.actions.addSelected(params.nodes)
      }else{
        console.log("Allready there, remove selection")
        this.props.actions.removeSelected(parmas.nodes)
      }
      console.log("Selected: " + this.props.numberOfSelected)
    })
    this.state.network.once("stabilizationIterationsDone", () => {
      this.state.timeoutValue = setTimeout(this.changeView.bind(this), 500)
    })
  }

  componentDidMount() {
    if (!this.state.network) {
      this.setState(initializeNetwork(this.state, this.refs.visNetwork))
      this.setState(populateNetwork(equipment, connections, connectionTypes, this.state))
    } else {
      this.state.network.stabilize()
    }
    //this.setState(addNodes(this.state))
    this.state.nodesAdded = true
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeoutValue)
  }

  render() {
    if(this.state.nodesAdded) this.setNetworkListeners()
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
  return { selectedEquipment: { entities: state.entities, numberOfSelected: state.numberOfSelected }};
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Diagram))
