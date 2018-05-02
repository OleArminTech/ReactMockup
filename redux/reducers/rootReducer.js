import { combineReducers } from 'redux'
import connectionsReducer from './connectionsReducer'
import connectionTypesReducer from './connectionTypesReducer'
import customerReducer from './customerReducer'
import datasetsReducer from './datasetsReducer'
import equipmentDegradationReducer from './equipmentDegradationReducer'
import equipmentReducer from './equipmentReducer'
import selectedEquipmentReducer from './selectedEquipmentReducer'
import settingsReducer from './settingsReducer'
import skidReducer from './skidReducer'
import userInterfaceReducer from './userInterfaceReducer'
import userReducer from './userReducer'
import workOrderReducer from './workOrderReducer'
import popupReducer from './popupReducer'

export default combineReducers({
  connections: connectionsReducer,
  connectionTypes: connectionTypesReducer,
  customer: customerReducer,
  datasets: datasetsReducer,
  equipmentDegradation: equipmentDegradationReducer,
  equipment: equipmentReducer,
  selectedEquipment: selectedEquipmentReducer,
  settings: settingsReducer,
  skid: skidReducer,
  userInterface: userInterfaceReducer,
  user: userReducer,
  workOrder: workOrderReducer,
  popup: popupReducer
})
