import * as connectionsActions from './connectionsActions'
import * as connectionTypesActions from './connectionTypesActions'
import * as customerActions from './customerActions'
import * as datasetsActions from './datasetsActions'
import * as displayDataActions from './displayDataActions'
import * as equipmentActions from './equipmentActions'
import * as equipmentDegradationActions from './equipmentDegradationActions'
import * as selectedEquipmentActions from './selectedEquipmentActions'
import * as settingsActions from './settingsActions'
import * as skidActions from './skidActions'
import * as userActions from './userActions'
import * as userInterfaceActions from './userInterfaceActions'
import * as workOrderActions from './workOrderActions'

const actions = Object.assign({},
  connectionsActions,
  connectionTypesActions,
  customerActions,
  datasetsActions,
  displayDataActions,
  equipmentActions,
  equipmentDegradationActions,
  selectedEquipmentActions,
  settingsActions,
  skidActions,
  userActions,
  userInterfaceActions,
  workOrderActions
)

export default actions
