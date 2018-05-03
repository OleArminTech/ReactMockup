import React, {Component} from 'react'
import _ from 'lodash'
import vis from 'vis'
import equipment from '../../../res/data/equipment.json'
import connections from '../../../res/data/connections.json'
import connectionTypes from '../../../res/data/connectionTypes.json'
import '../../../styles/diagram.css'
import { initializeNetwork, populateNetwork } from '../../scripts/vis/networkFunctions'

class Diagram extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      nodes: null,
      edges: null,
      data: null,
      options: null,
      network: null,
      addNode: false
    }
  }

  componentDidMount() {
    console.log(this.state)
    this.setState(initializeNetwork(this.state, this.refs.visNetwork))
    console.log(this.state)
    populateNetwork(equipment, connections, connectionTypes, this.state)
    console.log(this.state)
    this.state.addNode = true
  }

  render() {
    return (<div className="diagram" ref="visNetwork"/>)
  }
}

export default Diagram
