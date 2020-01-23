import React from 'react';

import './Message.scss';

const TYPES = {
  ERROR: 'error',
  LOADING: 'loading',
  INFO: 'info'
}

const STYLES = {
  [TYPES.ERROR]: 'message--error',
  [TYPES.LOADING]: 'message--loading',
  [TYPES.INFO]: 'message--info',
}

const Message = ({ children, type = TYPES.INFO }) => (
  <div className={`message ${STYLES[type]}`}>{children}</div>
);

Message.types = TYPES

export default Message;
