import {combineReducers} from 'redux';
import UserReducer from './reducerUsers.js';
import ActiveUserReducer from './reducer-active-user.js';

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
});

export default allReducers;