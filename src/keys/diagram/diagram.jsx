import React, { Component } from 'react'
import _ from 'lodash'
import equipment from '../../../res/data/equipment.json'
import connections from '../../../res/data/connections.json'
import connectionTypes from '../../../res/data/connectionTypes.json'

class Diagram extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = { text: "" }
  }

  componentDidMount(){
    this.setState({ equipment: equipment, connections: connections, connectionTypes: connectionTypes })
  }


  render() {
    return (
      <div>
        <h1>Diagram</h1>
        <div>
          { this.state.equipment && _.map(this.state.equipment.IDs, key => {
            return "" + key + ", "
            })}
        </div>
        <br />
        <div>
          { this.state.connections && _.map(this.state.connections.IDs, key => {
            return "" + key + ", "
            })}
        </div>
        <br />
        <div>
          { this.state.connectionTypes && _.map(this.state.connectionTypes.IDs, key => {
            return "" + key + ", "
            })}
        </div>
      </div>
    )
  }
}

export default Diagram
