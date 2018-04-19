import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../src/app'
import store from '../redux/configureStore'

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
