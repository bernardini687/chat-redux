const BASE_URL = 'https://wagon-chat.herokuapp.com';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export function fetchMessages(channel) {
  const promise = fetch(`${BASE_URL}/${channel}/messages`)
    .then(response => response.json());

  return { type: FETCH_MESSAGES, payload: promise };
}

export function createMessage(channel, author, content) {
  const body = { author, content };
  const promise = fetch(`${BASE_URL}/${channel}/messages`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return { type: CREATE_MESSAGE, payload: promise };
}
