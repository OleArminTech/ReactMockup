import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import HeaderSettingsMenu from '../components/menus/HeaderSettingsMenu'
import Modules from '../components/Modules'
import configureStore from '../redux/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'

let initialState = {
  textTest: {
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
        <Route exact path="/" component={App} />
        <Route path="/settings" component={HeaderSettingsMenu} />
        <Route path="/modules" component={Modules} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
