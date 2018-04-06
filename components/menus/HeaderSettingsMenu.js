import React, {Component} from 'react'

class HeaderSettingsMenu extends Component {

  render() {
    return (
      <div>
        <br/>
        <ul>
          {
            this.props.textTest.text && <li>{this.props.textTest.text}</li>
          }
          {
          this.props.itemTest.map((item) => {
            console.log("Items: " + item.text)
            return item.text && <li key={item.id}>{item.text}</li>
          })
          }
        </ul>
      </div>
    )
  }
}

export default HeaderSettingsMenu
