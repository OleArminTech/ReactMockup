import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/Actions'
import HeaderBar from './HeaderBar'
import SideMenu from './SideMenu'
import Modules from './Modules'
import Diagram from './modules/Diagram'
import '../styles/index.css'


class App extends Component {

  render() {
    return (
      <div className="container">
        <HeaderBar actions={this.props.actions} workOrder={this.props.workOrder} itemTest={this.props.itemTest} />
        <div className="content">
          <SideMenu />
          <Modules />

        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
