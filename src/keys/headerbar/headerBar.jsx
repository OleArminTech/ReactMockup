import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import HeaderSettingsMenu from './containers/headerSettingsMenu'
import HeaderUserMenu from './containers/headerUserMenu'
import '../../../styles/headerBar.css'
import arminIcon from '../../../res/img/ArminIcon.png'

class HeaderBar extends Component {

  render() {
    return (
      <div className="headerBar">
        <section className="headerBarLeft">
          <NavLink to="/"><img src={arminIcon} /></NavLink>
          <div>Title {this.props.workOrder.workOrderName && " (" + this.props.workOrder.workOrderName + ")" }</div>
        </section>
        <section className="headerBarRight">
          <li><HeaderUserMenu /></li>
          <li><HeaderSettingsMenu /></li>
        </section>
      </div>
    )
  }
}

HeaderBar.PropTypes = {
  workOrderName: PropTypes.string
}

export default HeaderBar
