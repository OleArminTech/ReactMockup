import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import HeaderSettingsMenu from './containers/HeaderSettingsMenu.jsx'
import HeaderUserMenu from './containers/HeaderUserMenu.jsx'
import '../../styles/headerBar.css'
import arminIcon from '../../res/img/ArminIcon.png'

class HeaderBar extends Component {

  render() {
    return (
      <div className="headerBar">
        <section className="headerBarLeft">
          <NavLink to="/"><img src={arminIcon} /></NavLink>
          <div>Title {this.props.workOrder.text && <span>({this.props.workOrder.text})</span>}</div>
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
