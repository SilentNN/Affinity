import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../../actions/session_actions';

export default (
    (oldState = {currentUserId: null}, action) => {
        // const nextState = {...oldState};

        switch (action.type) {
            case RECEIVE_CURRENT_USER:
                let [user] = Object.values(action.currentUser);
                return {currentUserId: user.id}
            case LOGOUT_CURRENT_USER:
                return {currentUserId: null};
            default:
                return oldState;
        }
    }
);