import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS} from '../../actions/session_actions';

export default (
    (oldState = [], action) => {
        switch(action.type) {
            case RECEIVE_SESSION_ERRORS:
                return action.errors;
            case RECEIVE_CURRENT_USER:
                return [];
            case CLEAR_SESSION_ERRORS:
                return [];
            default:
                return oldState;
        }
    }
);