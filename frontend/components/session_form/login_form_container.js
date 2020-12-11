import { connect } from 'react-redux';
import React from 'react';
import { login, clearSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
});

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors()),
    };
};

export default connect(mSTP, mDTP)(LoginForm);