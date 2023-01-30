import { combineReducers } from 'redux';
import isLoggedReducer from './isLoggedReducer'
import isAdminReducer from './isAdminReducer';
import devicesReducer from './devicesReducer';
import availableReducer from './availableReducer';
import filteredDevicesReducer from './filteredDevicesReducer';
import searchReducer from './searchReducer';
import vendorReducer from './vendroReducer';
import osReducer from './osReducer';
import notificationReducer from './notificationReducer';

const allReducers = combineReducers({
  isLogged: isLoggedReducer,
  isAdmin: isAdminReducer,
  devices: devicesReducer,
  available: availableReducer,
  filteredDevices: filteredDevicesReducer,
  search: searchReducer,
  vendorFilter: vendorReducer,
  osFilter: osReducer,
  notification: notificationReducer,
});

export default allReducers;