import { REACT_APP_API_BASE_URL } from '../config';

export const NEW_SUPPORT_REQUEST = 'NEW_SUPPORT_REQUEST';
export const newSupportRequest = () => ({
    type: NEW_SUPPORT_REQUEST
});

export const NEW_SUPPORT_SUCCESS = 'NEW_SUPPORT_SUCCESS';
export const newSupportSuccess = res => ({
    type: NEW_SUPPORT_SUCCESS,
    res
});

export const NEW_SUPPORT_ERROR = 'NEW_SUPPORT_ERROR';
export const newSupportError = error => ({
    type: NEW_SUPPORT_ERROR,
    error
});

export const newSupportMessage = entry => dispatch => {
  dispatch(newSupportRequest());
  return fetch(`${REACT_APP_API_BASE_URL}/entries`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(entry)
      })
      .then(res => res.json())
      .then((res) => {
        dispatch(newSupportSuccess(res))
      })
      .catch(err => {
        dispatch(newSupportError(err));
              
      })
};
