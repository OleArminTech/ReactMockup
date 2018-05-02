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

  randomFunction(id, event){
    console.log(id)
    console.log(event)
    this.props.popupType(id)
  }

  render() {
    return (
      <div className="sideBar">
        <section className="selectorsGroup">
          <a href="#" onClick={this.randomFunction.bind(this, "FIND")}>             <img src={arminIcon} /> <span>Find</span>  </a>
          <a href="#" onClick={this.randomFunction.bind(this, "FILTER")}>           <img src={arminIcon} /> <span>Filter</span>  </a>
          <a href="#" onClick={this.randomFunction.bind(this, "PATH")}>             <img src={arminIcon} /> <span>Path</span>  </a>
          <a href="#" onClick={this.randomFunction.bind(this, "OFFSET")}>           <img src={arminIcon} /> <span>Offset</span>  </a>
          <a href="#" onClick={this.randomFunction.bind(this, "CLEAR_SELECTION")}>  <img src={arminIcon} /> <span>Clear Selection</span>  </a>

          {/* <NavLink to="/"><img src={arminIcon} /><span>Find</span></NavLink>
          <NavLink to="/"><img src={arminIcon} /><span>Filter</span></NavLink>
          <NavLink to="/"><img src={arminIcon} /><span>Path</span></NavLink>
          <NavLink to="/"><img src={arminIcon} /><span>Offset</span></NavLink>
          <NavLink to="/"><img src={arminIcon} /><span>Clear Selection</span></NavLink> */}
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

export default SideBar
