import React, { useState, useEffect } from 'react';

import { fetchUsers } from '../../utils/fetch';

import Users from './UsersHook';
// import Users from './Users';
import Message from '../Message';

const UsersContainer = () => {
  const [{ users, error }, setData] = useState({ users: [], error: null });
  useEffect(() => {
    fetchUsers().then(
      users => {
        setData({ users });
      },
      error => {
        setData({ error });
      }
    );
  }, []);

  if (error) {
    return <Message type={Message.ERROR}>Error: Error</Message>;
  }

  return users.length === 0 ? (
    <Message type={Message.LOADING}>Loading...</Message>
  ) : (
    <Users users={users} error={error} />
  );
}

export default UsersContainer;
