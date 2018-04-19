import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions/actions'
import HeaderBar from './headerbar/headerBar'
import SideBar from './sidebar/sideBar'
import Diagram from './diagram/diagram'
import Ranking from './ranking/ranking'
import HistoryModule from './history/historyModule'
import Instructions from './instructions/instructions'
import WorkOrder from './workorder/workOrder'
import PageNotFound from './errorpages/pageNotFound'
import '../styles/index.css'

class App extends Component {

  render() {
    return (
      <div className="container">
        <HeaderBar actions={this.props.actions} workOrder={this.props.workOrder} itemTest={this.props.itemTest} />
        <div className="content">
          <SideBar />
          <div className="modules">
            <Switch>
              <Route exact path="/" component={WorkOrder} />
              <Route path="/diagram" component={Diagram} />
              <Route path="/ranking" component={Ranking} />
              <Route path="/history" component={HistoryModule} />
              <Route path="/instructions" component={Instructions} />
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
