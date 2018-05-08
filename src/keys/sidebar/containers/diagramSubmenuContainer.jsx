import React, { Component } from 'react'
import arminIcon from '../../../../res/img/ArminIcon.png'
import PropTypes from 'prop-types'
import CollapseSkidMenuItem from '../components/collapseSkidMenuItem'
import HideSkidMenuItem from '../components/hideSkidMenuItem'
import ShowEquipmentDetailMenuItem from '../components/showEquipmentDetailMenuItem'


class DiagramSubmenuContainer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      skidCollapsed: false,
      skidShown: false,
      euipmentDetailShown: false,
      cluster: ''
    }
  }

  collapseSkid = () => {
    this.setState({ skidCollapsed: !this.props.diagram.skidCollapsed })
    this.props.actions.collapseSkid(!this.props.diagram.skidCollapsed)
  }

  showSkid = () => {
    this.setState({ skidCollapsed: !this.props.diagram.skidShown })
    this.props.actions.showSkid(!this.props.diagram.skidShown)
  }

  showEquipmentDetail = () => {
    this.setState({ euipmentDetailShown: !this.state.euipmentDetailShown })
    this.props.actions.showEquipmentDetail(!this.props.diagram.euipmentDetailShown)
  }

  render = () => {
    return(
      <section className="diagramSubmenuGroup">
        <CollapseSkidMenuItem
          collapseSkid={ this.collapseSkid }
          skidCollapsed={ this.state.skidCollapsed }/>
        <HideSkidMenuItem
          showSkid={ this.showSkid }
          skidShown={ this.state.skidShown}/>
        <ShowEquipmentDetailMenuItem
          showEquipmentDetail={ this.showEquipmentDetail }
          euipmentDetailShown={ this.state.euipmentDetailShown}/>
        <a href="#"><img src={arminIcon} /><span>Add equipment</span></a>
        <a href="#"><img src={arminIcon} /><span>Add connection</span></a>

      </section>
    )
  }
}

export default DiagramSubmenuContainer
