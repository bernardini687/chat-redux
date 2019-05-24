// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// state and reducers
import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';
import activeChannelReducer from './reducers/active_channel_reducer';
import memberReducer from './reducers/member_reducer';

const reducers = combineReducers({
  // changeMe: (state = null, action) => state
  messages: messagesReducer,
  channels: channelsReducer,
  activeChannel: activeChannelReducer,
  member: memberReducer
});

const initialState = {
  messages: [],
  channels: ['catsinspacesuits', 'royalcats'],
  selectedChannel: 'catsinspacesuits',
  currentMember: prompt('Your name, kind sir:') || `kitteh${Math.random().toString().substring(1, 5)}`
};

const middlewares = applyMiddleware(logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
