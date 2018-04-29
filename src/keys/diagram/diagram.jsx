import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../redux/actions/actions'

class Diagram extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      id: 0,
      text: 'Stuff',
      done: false
    }
  }

  showEquipmentID(){
    let equip = {}
    let equipID = ""
    equip = this.props.equipment.entities[0]
    Object.keys(equip).forEach(key => {
    if(key === "equipmentID"){
      equipID = key + ": " + equip[key]
    }
    })
    return equipID
  }

  render() {
    return (
      <div>
        <div>Diagram</div>
        <div>{ this.showEquipmentID() }</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Diagram))
