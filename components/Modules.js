import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Diagram from './modules/Diagram'
import Ranking from './modules/Ranking'
import HistoryModule from './modules/HistoryModule'
import Instructions from './modules/Instructions'
import WorkOrder from './modules/WorkOrder'
import PageNotFound from './PageNotFound'
import '../styles/modules.css'

class Modules extends Component {

  render() {
    return (
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
    )
  }

}

export default Modules
