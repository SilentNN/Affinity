import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS,
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
        .then(() => dispatch(logoutCurrentUser()))
        .fail(error => dispatch(receiveErrors(error.responseJSON)))
);