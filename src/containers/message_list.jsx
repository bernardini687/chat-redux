/* eslint react/prefer-stateless-function: off */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions';

import Message from '../components/message';

class MessageList extends React.Component {
  componentWillMount() {
    const { activeChannel } = this.props;
    this.props.fetchMessages(activeChannel);
  }

  componentDidMount() {
    // fetchMessages(channel) on interval
  }

  componentWillUnmount() {
    // clear interval
  }

  render() {
    const { activeChannel, messages } = this.props;
    return (
      <div>
        <h2>{`#${activeChannel}`}</h2>
        <ul className="list-unstyled">
          {messages.map(message => (
            <Message key={message.id} message={message} />
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { activeChannel: state.activeChannel, messages: state.messages };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
