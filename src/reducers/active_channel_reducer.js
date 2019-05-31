import { ACTIVE_CHANNEL } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case ACTIVE_CHANNEL: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
