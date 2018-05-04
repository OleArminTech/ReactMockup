import React, {Component} from 'react'
import _ from 'lodash'
import vis from 'vis'
import equipment from '../../../res/data/equipment.json'
import connections from '../../../res/data/connections.json'
import connectionTypes from '../../../res/data/connectionTypes.json'
import '../../../styles/diagram.css'
import { initializeNetwork, populateNetwork } from '../../scripts/vis/networkFunctions'
import { setCountdown, resetIntervals } from '../../scripts/timerFunctions'

class Diagram extends Component {

  const constructor = (props, context) => {
    super(props, context)
    this.state = {
      nodes: null,
      edges: null,
      data: null,
      options: null,
      network: null,
      addnode: false,
      currentCount: 0,
      intervals: []
    }
  }

  const addnodefunc = () => {
    this.state.nodes.add({id: 10001, label: "Modul 1"})
    this.state.nodes.add({id: 10002, label: "Modul 2"})
    this.state.nodes.add({id: 10003, label: "Modul 3"})
    this.state.edges.add({
      id: 10001,
      from: 10002,
      to: 10001,
      label: "Kobling 1",
      smooth: {
        type: "curvedCCW",
        roundness: 0.4
      }
    })
    this.state.edges.add({
      id: 10002,
      from: 10003,
      to: 10001,
      label: "Kobling 2",
      smooth: {
        type: "curvedCCW",
        roundness: 0.4
      }
    })
    this.state.edges.add({
      id: 10003,
      from: 10001,
      to: 10003,
      label: "Kobling 3",
      smooth: {
        type: "curvedCCW",
        roundness: 0.4
      }
    })
    this.state.edges.add({
      id: 10004,
      from: 10002,
      to: 10003,
      label: "Kobling 4",
      smooth: {
        type: "curvedCW",
        roundness: 0.4
      }
    })
    this.state.addnode = false
  }

  const changeView = () => this.state.network.fit({nodes: [10001, 10002, 10003], animation: false})

  const componentDidMount = () => {
    this.setState(initializeNetwork(this.state, this.refs.visNetwork))
    this.setState(populateNetwork(equipment, connections, connectionTypes, this.state))
    this.state.addnode = true
    this.state.interval = setInterval(this.timerfunc.bind(this), 1000)
    setCountdown(this.testtest.bind(this), 5)
  }

  const componentWillUnmount = () => resetIntervals() // Reset interval if user leaves

  const render = () => {
    if (this.state.addnode) this.addnodefunc()
    return (<div className="diagram" ref="visNetwork"/>)
  }
}

export default Diagram
