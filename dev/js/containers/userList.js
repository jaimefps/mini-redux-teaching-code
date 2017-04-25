// react
import React, { Component } from 'react';
// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// action to be connected.
import { selectUser } from '../actions/user-list';

// NOTE: only a view component
class UserList extends Component {
  createListItem() {
    return this.props.users.map(user => (
      <div className="names" key={user.id} onClick={() => this.props.selectUser(user)}>
        {user.first} {user.last}
      </div>
      ));
  }
  render() {
    return (
      <div>
        {this.createListItem()}
      </div>
    );
  }
}

// "container" : connects actions and STORE state to the components.
function mapStateToProps(state) {
  return {
    users: state.users,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
