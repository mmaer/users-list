import React, { useState } from 'react';

import User from '../User';
import Message from '../Message';

import './Users.scss';

const Users = ({ users }) => {
  const [filteredUsers, setUsers] = useState(users);

  const getFilteredUsers = event => {
    const query = event.target.value;

    const newFilteredUsers = users.filter(
      ({ name }) => name.toLowerCase().search(query.toLowerCase()) !== -1
    );

    if (
      newFilteredUsers.length !== filteredUsers.length || 
      filteredUsers.some((user, index) => user.name !== newFilteredUsers[index].name)
    ) {
      setUsers(newFilteredUsers);
    }
  };

  return (
    <div className="users">
      <h1>Users list</h1>
      <input
        className="users__input"
        type="text"
        placeholder="Search by user name..."
        onChange={getFilteredUsers}
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

export default Users;
