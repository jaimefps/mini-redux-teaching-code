import React from 'react';
import UserList from '../containers/userList';
import UserDetails from '../containers/userDetails';

require('../../scss/style.scss');

const App = () => (
  <div>
    <h2>username list </h2>
    <UserList />
    <hr />
    <h2>user details </h2>
    <UserDetails />
  </div>
);

export default App;