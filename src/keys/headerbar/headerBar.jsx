import React, { Component } from 'react'
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
          <div>Title {this.props.workOrder.workOrderName && <span>({this.props.workOrder.workOrderName})</span>}</div>
        </section>
        <section className="headerBarRight">
          <li><HeaderUserMenu /></li>
          <li><HeaderSettingsMenu /></li>
        </section>
      </div>
    )
  }
}

export default HeaderBar
