/* eslint react/prefer-stateless-function: off */

import React from 'react';

export default class Message extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <li>
        <div className="message-header">
          <span>
            {message.author}
          </span>
          <span className="text-info">
            {message.created_at.match(/\d\d:\d\d:\d\d/)[0]}
          </span>
        </div>
        <div>
          {message.content}
        </div>
      </li>
    );
  }
}
