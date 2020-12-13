import React from 'react';
import {Link} from 'react-router-dom';

import LoginFormContainer from './login_form_container';
import RegisterFormContainer from './register_form_container';

export default (
    ({match}) => (
        <div className='session-container'>
            <Link to="/" className='affinity-nav-logo'>
                <div className='affinity-nav-logo'>
                    affinity logo
                </div>
            </Link>

            {match.path === '/login' ? (
                    <LoginFormContainer />
                ) : (
                    <RegisterFormContainer />
            )}
        </div>

    )
)