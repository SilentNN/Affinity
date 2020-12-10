import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

export default (
    (oldState = {id: null}, action) => {
        // const nextState = {...oldState};

        switch (action.type) {
            case RECEIVE_CURRENT_USER:
                return { currentUserId: action.currentUser.id }
            case LOGOUT_CURRENT_USER:
                return {id: null};
            default:
                return oldState;
        }
    }
);