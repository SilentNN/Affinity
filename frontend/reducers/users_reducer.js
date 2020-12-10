import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

export default (
    (oldState = {}, action) => {
        const nextState = {...oldState};
        switch (action.type) {
            case RECEIVE_CURRENT_USER:
                return {...nextState, [action.currentUser.id]: action.currentUser};
            default:
                return oldState;
        }
    }
)