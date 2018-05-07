import React, {Component} from 'react'
import _ from 'lodash'
import vis from 'vis'
import equipment from '../../../res/data/equipment.json'
import connections from '../../../res/data/connections.json'
import connectionTypes from '../../../res/data/connectionTypes.json'
import '../../../styles/diagram.css'
import { initializeNetwork, populateNetwork, addNodes } from '../../scripts/vis/networkFunctions'
import { setCountdown, resetIntervals } from '../../scripts/timerFunctions'

class Diagram extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      nodes: null,
      edges: null,
      data: null,
      options: null,
      network: null,
      addnode: false,
      currentCount: 0
    }
  }

  changeView(){ this.state.network.fit({nodes: [10001, 10002, 10003], animation: false}) }

  componentDidMount(){
    this.setState(initializeNetwork(this.state, this.refs.visNetwork))
    this.setState(populateNetwork(equipment, connections, connectionTypes, this.state))
    //this.state.addnode = true
    //this.setState(addNodes(this.state))
    //setCountdown(this.changeView.bind(this), 5)
  }

  componentWillUnmount(){
    resetIntervals() // Reset interval if user leaves
  }

  render(){
    return (<div className="diagram" ref="visNetwork"/>)
  }
}

export default Diagram
