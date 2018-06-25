import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TimingReducer from './TimingReducer';

export default combineReducers({
  AuthReducer,
  TimingReducer,
});
