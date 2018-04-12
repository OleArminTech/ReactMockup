import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import HeaderSettingsMenu from './menus/HeaderSettingsMenu'
import HeaderUserMenu from './menus/HeaderUserMenu'
import '../styles/headerBar.css'

class HeaderBar extends Component {

  render() {
    console.log("Bar: " + this.props.textTest)
    return (
      <div className="headerBar">
        <section className="headerBarLeft">
          <div>Logo</div>
          <div>Title</div>
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
