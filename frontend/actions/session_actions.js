import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const register = user => dispatch => (
    SessionAPI.register(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(error => dispatch(receiveErrors(error.responseJSON)))
);

export const login = user => dispatch => (
    SessionAPI.login(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(error => dispatch(receiveErrors(error.responseJSON)))
);

export const logout = () => dispatch => (
    SessionAPI.logout()
        .then(() => (dispatch(logoutCurrentUser())))
        .fail(error => dispatch(receiveErrors(error.responseJSON)))
);
