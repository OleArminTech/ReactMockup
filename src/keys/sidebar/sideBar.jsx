import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import arminIcon from '../../../res/img/ArminIcon.png'
import '../../../styles/sideBar.css'

class SideBar extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      id: 0,
      text: 'Stuff',
      done: false
    }
  }

  render() {
    return (
      <div className="sideBar">
        <section className="selectorsGroup">
          <NavLink to="/"><img src={arminIcon} /><span>Find</span></NavLink>
          <NavLink to="/"><img src={arminIcon} /><span>Filter</span></NavLink>
          <NavLink to="/"><img src={arminIcon} /><span>Path</span></NavLink>
          <NavLink to="/"><img src={arminIcon} /><span>Offset</span></NavLink>
          <NavLink to="/"><img src={arminIcon} /><span>Clear Selection</span></NavLink>
        </section>
        <hr />
        <section className="modulesGroup">
          <NavLink to="/diagram"><img src={arminIcon} /><span>Diagram</span></NavLink>
          <NavLink to="/ranking"><img src={arminIcon} /><span>Ranking</span></NavLink>
          <NavLink to="/history"><img src={arminIcon} /><span>History</span></NavLink>
          <NavLink to="/instructions"><img src={arminIcon} /><span>Instructions</span></NavLink>
        </section>
        <hr />
        <section className="workorderGroup">
          <NavLink to="/workorder"><img src={arminIcon} /><span>Work order</span></NavLink>
        </section>
        <hr />
        <section className="diagramSubmenuGroup">
          {/* SUBMENUS HERE */}
        </section>
      </div>
    )
  }

}

export default SideBar
