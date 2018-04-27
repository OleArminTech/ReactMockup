import React, { Component } from 'react'
import HistoryContainer from './containers/historyContainer'
import Instructions from './containers/instructions'
import Ranking from './containers/ranking'

class DisplayData extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      id: 0,
      text: 'Stuff',
      done: false
    }
  }

  getContainer(){
    if(this.props.location.pathname == "/ranking") {
      return <Ranking />
    } else if(this.props.location.pathname == "/history") {
      return <HistoryContainer />
    } else if(this.props.location.pathname == "/instructions") {
      return <Instructions />
    } else {
      return null
    }
  }

  render() {
    return (
      <div>
        { this.getContainer() }
      </div>
    )
  }

}

export default DisplayData
