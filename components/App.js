import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/Actions'
import HeaderBar from './HeaderBar'


class App extends Component {

  render() {
    return (
      <div>
        <h1>Armin Mockup</h1>
        <HeaderBar actions={this.props.actions} textTest = {this.props.textTest} itemTest={this.props.itemTest} />
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
