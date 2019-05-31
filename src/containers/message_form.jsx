/* eslint react/prefer-stateless-function: off */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createMessage } from '../actions';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { activeChannel, member } = this.props;
    const { input } = this.state;
    this.props.createMessage(activeChannel, member, input);
    this.setState({ input: '' });
  }

  render() {
    const { input } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          autoComplete="off"
          ref={(text) => { this.messageBox = text; }}
          onChange={e => this.setState({ input: e.target.value })}
          value={input}
          type="text"
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { activeChannel: state.activeChannel, member: state.member };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
