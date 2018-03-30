import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'

let initialState = {
  
}

let store = configureStore(initialState)

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
