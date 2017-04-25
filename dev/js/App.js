import React from 'react';
import UserList from './containers/UserList';
import UserDetails from './containers/UserDetails';

import './../scss/style.scss';

// NOTE: only renders a view.
const App = () => (
  <div>
    <h2>USERS LIST</h2>
    <UserList />
    <hr />
    <h2>USER DETAILS </h2>
    <UserDetails />
  </div>
);

export default App;
