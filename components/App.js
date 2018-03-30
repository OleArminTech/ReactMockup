import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/Actions'
import HeaderSettingsMenu from './menus/HeaderSettingsMenu'
import HeaderUserMenu from './menus/HeaderUserMenu'
import Databasehandler from './modules/Databasehandler'
import Datahandler from './modules/Datahandler'
import Diagram from './modules/Diagram'
import HistoryModule from './modules/HistoryModule'
import Instructions from './modules/Instructions'
import Ranking from './modules/Ranking'
import Users from './modules/Users'
import WorkOrder from './modules/WorkOrder'
import AddConnection from './modules/diagramSubmenus/AddConnection'
import AddEquipment from './modules/diagramSubmenus/AddEquipment'
import CollapseHPpack from './modules/diagramSubmenus/CollapseHPpack'
import DiagramSubmenu from './modules/diagramSubmenus/DiagramSubmenu'
import EqDetail from './modules/diagramSubmenus/EqDetail'
import ShowHPpack from './modules/diagramSubmenus/ShowHPpack'
import ClearSelection from './selectors/ClearSelection'
import Filter from './selectors/Filter'
import Find from './selectors/Find'
import Offset from './selectors/Offset'
import Path from './selectors/Path'
import UserProfile from './users/UserProfile'
import HeaderBar from './HeaderBar'
import Modules from './Modules'
import Selectors from './Selectors'
import SideBar from './SideBar'


class App extends Component {

  render() {
    return (
      <div>
        <h1>Armin Mockup</h1>
        <HeaderBar />
        <HeaderUserMenu />
        <HeaderSettingsMenu />
        <div>-------------</div>
        <SideBar />
        <Selectors />
        <Find />
        <Filter />
        <Path />
        <Offset />
        <ClearSelection />
        <div>-------------</div>
        <Modules />
        <Diagram />
        <Ranking />
        <HistoryModule />
        <Instructions />
        <div>-------------</div>
        <WorkOrder />
        <div>-------------</div>
        <DiagramSubmenu />
        <CollapseHPpack />
        <ShowHPpack />
        <EqDetail />
        <AddEquipment />
        <AddConnection />
        <div>-------------</div>
        <Users />
        <UserProfile />
        <Databasehandler />
        <Datahandler />
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
