import { REACT_APP_API_BASE_URL } from '../config';

export const NEW_SUPPORT_REQUEST = 'NEW_SUPPORT_REQUEST';
export const newSupportRequest = () => ({
    type: NEW_SUPPORT_REQUEST
});

export const NEW_SUPPORT_SUCCESS = 'NEW_SUPPORT_SUCCESS';
export const newSupportSuccess = () => ({
    type: NEW_SUPPORT_SUCCESS
});

export const NEW_SUPPORT_ERROR = 'NEW_SUPPORT_ERROR';
export const newSupportError = error => ({
    type: NEW_SUPPORT_ERROR,
    error
});

export const END_SUPPORT_MESSAGING = 'END_SUPPORT_MESSAGING';
export const endSupportMessaging = () => ({
  type: END_SUPPORT_MESSAGING
});

export const newSupportMessage = entry => dispatch => {
  dispatch(newSupportRequest());
  return fetch(`${REACT_APP_API_BASE_URL}/support`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(entry)
      })
      .then(res => res.json())
      .then((res) => {
        dispatch(newSupportSuccess())
      })
      .catch(err => {
        dispatch(newSupportError(err));
              
      })
};
