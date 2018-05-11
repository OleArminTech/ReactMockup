import React, { Component } from 'react'

class Ranking extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      id: 0,
      text: '',
      done: false
    }
  }

  randomFunction = () => {
    let obj = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }
    let a = 4
    obj = _.omit(obj, a)

    let b = [ 1, 2, 3 ]
    obj = _.omit(obj, b)
    return obj
  }

  render = () => {
    let arr = [1000, 3600, 1700, 1800, 3700, 3800, 300, 1500, 100, 3900, 1100, 2000, 200]
    arr = _.sortBy(arr)
    return (
      <div>
        Ranking - USED FOR TESTING
        { _.map(this.randomFunction(), key => {
          return <div key={key}>{key}</div>
        }) }

        { _.map(arr, r => {
          return r + ', '
        }) }
      </div>
    )
  }
}

export default Ranking
