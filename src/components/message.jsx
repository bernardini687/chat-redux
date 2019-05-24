/* eslint react/prefer-stateless-function: off */

import React from 'react';

export default class Message extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <div>
        {message.content}
      </div>
    );
  }
}
