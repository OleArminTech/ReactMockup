import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions/actions'
import HeaderBar from './keys/headerbar/headerBar'
import SideBar from './keys/sidebar/sideBar'
import Diagram from './keys/diagram/diagram'
import DisplayData from './keys/displaydata/displayData'
import WorkOrder from './keys/workorder/workOrder'
import PageNotFound from './errorpages/pageNotFound'
import '../styles/index.css'

import PopupMenu from './keys/popupmenu/popupMenu'

class App extends Component {

  render() {
    return (
      <div className="container">
        <HeaderBar actions={this.props.actions} workOrder={this.props.workOrder} />
        <div className="content">
          {this.props.popup.openModal && <PopupMenu popup={this.props.popup} actions={this.props.actions}/>}
          <SideBar popupType={this.props.actions.popupType}/>
          <div className="modules">
            <Switch>
              <Route exact path="/" component={WorkOrder} />
              <Route path="/diagram" component={Diagram} />
              <Route path="/ranking" component={DisplayData} />
              <Route path="/history" component={DisplayData} />
              <Route path="/instructions" component={DisplayData} />
              <Route path="/workorder" component={WorkOrder} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
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
