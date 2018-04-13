import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../redux/Actions'

class WorkOrder extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      text: '',
    }
  }

  myChangeHandler(event) {
    this.setState({text: event.target.value})
  }

  mySubmitHandler(event) {
    event.preventDefault()
    this.props.actions.enterWorkOrder(this.state.text)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.mySubmitHandler.bind(this)}>
          <input
            type="text"
            placeholder="Text here"
            value={this.state.text}
            onChange={this.myChangeHandler.bind(this)}/>
          <input type="submit" text="Submit" />
        </form>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkOrder))
