import { FETCH_MESSAGES, CREATE_MESSAGE, SELECT_CHANNEL } from '../actions';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    case CREATE_MESSAGE: {
      const stateCopy = state.concat();
      stateCopy.push(action.payload);
      return stateCopy;
    }
    case SELECT_CHANNEL: {
      return []; // Clear view after changing channel.
    }
    default:
      return state;
  }
}
