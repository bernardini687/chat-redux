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
              <div>
                <div>
                  <span>
                    {message.author}
                  </span>
                  <span>
                    {message.created_at.match(/\d\d:\d\d:\d\d/)[0]}
                  </span>
                </div>
                <Message message={message} />
              </div>
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
