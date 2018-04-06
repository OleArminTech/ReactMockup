import React, {Component} from 'react'
import HeaderSettingsMenu from './menus/HeaderSettingsMenu'
import HeaderUserMenu from './menus/HeaderUserMenu'

class HeaderBar extends Component {

  render() {
    console.log("Bar: " + this.props.textTest.text)
    return (<div>
      <HeaderUserMenu actions={this.props.actions} textTest={this.props.textTest} />
      <HeaderSettingsMenu itemTest={this.props.itemTest} textTest={this.props.textTest}/>
    </div>)
  }
}

export default HeaderBar
