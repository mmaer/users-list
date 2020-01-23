import React from 'react';

import './User.scss';

const User = ({ name, username }) => (
  <li className="user">
    <span className="user__name">{name}</span>
    {username}
  </li>
);

export default User;
