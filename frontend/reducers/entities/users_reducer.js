import {RECEIVE_CURRENT_USER} from '../../actions/session_actions';

export default (
    (oldState = {}, action) => {
        const nextState = {...oldState};
        switch (action.type) {
            case RECEIVE_CURRENT_USER:
                let [user] = Object.values(action.currentUser);
                return {...nextState, [user.id]: user};
            default:
                return oldState;
        }
    }
);