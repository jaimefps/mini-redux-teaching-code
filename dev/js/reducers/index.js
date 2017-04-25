// redux
import { combineReducers } from 'redux';
// reducers imported
import UserReducer from './reducerUsers.js';
import ActiveUserReducer from './reducer-active-user.js';

// NOTE: joins all REDUCERS and gives the STORE its actual state.
const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer,
});

export default allReducers;
