import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../src/app'
import configureStore from '../redux/configureStore'

let initialState = {
  workOrder: {
    text: ''
  },
  itemTest: [{
    id: '',
    text: ''
  }]
}

let store = configureStore(initialState)

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
