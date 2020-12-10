import {connect} from 'react-redux';

import {login} from "../../actions/session_actions";

import Splash from './splash';

const mSTP = state => ({
    loggedIn: Boolean(state.session.currentUserId),
});

const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(Splash);