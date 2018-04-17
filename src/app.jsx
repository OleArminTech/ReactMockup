import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions/actions'
import HeaderBar from './headerbar/index.jsx'
import SideBar from './sidebar/index.jsx'
import Diagram from './diagram/index.jsx'
import Ranking from './ranking/index.jsx'
import HistoryModule from './history/index.jsx'
import Instructions from './instructions/index.jsx'
import WorkOrder from './workorder/index.jsx'
import PageNotFound from './errorpages/pageNotFound.jsx'
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
