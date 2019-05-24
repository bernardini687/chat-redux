import React from 'react';
import { connect } from 'react-redux';

import Message from '../components/message';

class MessageList extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <div>
        <h2>channel name</h2>
        <ul>
          {messages.map(message => (
            <li key={message.created_at}>
              <Message message={message} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { messages: state.messages };
}

export default connect(mapStateToProps, null)(MessageList);
