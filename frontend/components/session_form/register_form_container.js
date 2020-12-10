import { connect } from 'react-redux';
import React from 'react';
import { register } from '../../actions/session_actions';
import RegisterForm from './register_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
});

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(register(user)),
    };
};

export default connect(mSTP, mDTP)(RegisterForm);