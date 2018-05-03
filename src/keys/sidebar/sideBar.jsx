import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import arminIcon from '../../../res/img/ArminIcon.png'
import '../../../styles/sideBar.css'
import PropTypes from 'prop-types'

class SideBar extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      id: 0,
      text: 'Stuff',
      done: false
    }
  }

  handleClearSelection(event){
    console.log("Clear Selection: WiP")
  }

  openModalWithId(id, event){
    this.props.popupType(id)
  }

  render() {
    return (
      <div className="sideBar">
        <section className="selectorsGroup">
          <a href="#" onClick={this.openModalWithId.bind(this, "MODAL_FIND")}>             <img src={arminIcon} /> <span>Find</span>  </a>
          <a href="#" onClick={this.openModalWithId.bind(this, "MODAL_FILTER")}>           <img src={arminIcon} /> <span>Filter</span>  </a>
          <a href="#" onClick={this.openModalWithId.bind(this, "MODAL_PATH")}>             <img src={arminIcon} /> <span>Path</span>  </a>
          <a href="#" onClick={this.openModalWithId.bind(this, "MODAL_OFFSET")}>           <img src={arminIcon} /> <span>Offset</span>  </a>
          <a href="#" onClick={this.handleClearSelection.bind(this)}>           <img src={arminIcon} /> <span>Clear Selection</span>  </a>

        </section>
        <hr />
        <section className="modulesGroup">
          <NavLink to="/diagram">     <img src={arminIcon} /><span>Diagram</span></NavLink>
          <NavLink to="/ranking">     <img src={arminIcon} /><span>Ranking</span></NavLink>
          <NavLink to="/history">     <img src={arminIcon} /><span>History</span></NavLink>
          <NavLink to="/instructions"><img src={arminIcon} /><span>Instructions</span></NavLink>
        </section>
        <hr />
        <section className="workorderGroup">
          <NavLink to="/workorder">   <img src={arminIcon} /><span>Work order</span></NavLink>
        </section>
        <hr />
        <section className="diagramSubmenuGroup">
          {/* SUBMENUS HERE */}
        </section>
      </div>
    )
  }

}

SideBar.propTypes = {
  popupType: PropTypes.func
}

export default SideBar
