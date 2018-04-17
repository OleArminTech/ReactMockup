import React, { Component } from 'react'
import { Redirect, NavLink, withRouter } from 'react-router-dom'

class PageNotFound extends Component {

  componentDidMount() {
    this.interval = setInterval(() => {
      this.handleRedirect()
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleRedirect(event){
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <h1>Error code 404: Page not found</h1>
        <p>This is not the page you're looking for.</p>
        <br />
        <p>Redirecting to last page in 5 seconds...</p>
        <p>If nothing happens, click <a href="#" onClick={this.handleRedirect.bind(this)}>here</a>.</p>
      </div>
    )
  }

}

export default withRouter(PageNotFound)
