// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
// import messagesReducer from './reducers/messages_reducer';
// import channelsReducer from './reducers/channels_reducer';
// import selectedChannelReducer from './reducers/selected_channel_reducer';
// import memberReducer from './reducers/member_reducer';

// const reducers = combineReducers({
//   // changeMe: (state = null, action) => state
//   messages: messagesReducer,
//   channels: channelsReducer,
//   selectedChannel: selectedChannelReducer,
//   member: memberReducer
// });

const initialState = {
  messages: [],
  channels: ['catsinspacesuits', 'royalcats'],
  selectedChannel: 'catsinspacesuits',
  currentMember: prompt('Your name, sir:') || `kitteh${Math.random().toString().substring(1, 5)}`
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
