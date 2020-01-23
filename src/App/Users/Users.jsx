import React, { Component } from 'react';

import User from '../User';
import Message from '../Message';

import './Users.scss';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredUsers: props.users,
    };
  }

  getFilteredUsers = event => {
    const { users } = this.props;
    const { filteredUsers } = this.state;
    const query = event.target.value;

    const newFilteredUsers = users.filter(
      ({ name }) => name.toLowerCase().search(query.toLowerCase()) !== -1
    );

    if (
      newFilteredUsers.length !== filteredUsers.length || 
      filteredUsers.some((user, index) => user.name !== newFilteredUsers[index].name)
    ) {
      this.setState({ filteredUsers: newFilteredUsers });
    }    
  };

  render() {
    const { filteredUsers } = this.state;
    
    return (
      <div className="users">
        <h1>Users list</h1>
        <input
          className="users__input"
          type="text"
          placeholder="Search by user name..."
          onChange={this.getFilteredUsers}
        />
        {filteredUsers.length === 0 ? (
          <Message type={Message.INFO}>User not found :(</Message>
        ) : (
          <ol className="users__list">
            {filteredUsers.map(({ id, ...restParams }) => (
              <User key={id} {...restParams} />
            ))}
          </ol>
        )}
      </div>
    );
  }
}

export default Users;
