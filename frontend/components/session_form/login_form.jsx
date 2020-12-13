import React from 'react';
import {Link} from 'react-router-dom';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fieldsFilled = {
            email: true,
            password: true,
        };
    }

    componentWillUnmount() {
        this.props.clearSessionErrors()
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    filledRequiredFields({email, password}) {
        let allFilled = true;

        if (email.length) {
            this.fieldsFilled.email = true;
        } else {
            this.fieldsFilled.email = false;
            allFilled = false;
        }

        if (password.length) {
            this.fieldsFilled.password = true;
        } else {
            this.fieldsFilled.password = false;
            allFilled = false;
        }

        return allFilled;
    }

    loginDemo() {
        return this.props.processForm({
            email: 'demo@lknaffinity.com',
            password: 'demopassword',
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearSessionErrors();
        const user = Object.assign({}, this.state);
        if (this.filledRequiredFields(user)) {
            this.props.processForm(user);
        } else {
            this.forceUpdate();
        }
    }

    render() {
        const loginError = this.props.errors.find((error) => error.match(/[Ll]ogin or password/));
    
        return (
        <div className="session-form-container">

            <form onSubmit={this.handleSubmit} className="session-form expanded">
                <div className='main-login-form'>
                    <h2>
                        Welcome back!
                    </h2>
    
                    <h3>
                        We're so excited to see you again!
                    </h3>
    
                    <div className="session-form-inputs">
                        <label className={this.fieldsFilled.email && !loginError ? '' : 'field-error'}>
                            <h5>
                                EMAIL
                                {!this.fieldsFilled.email && (
                                    <span className='field-error-span'> - This field is required</span>
                                )}
                                {loginError && (
                                    <span className='field-error-span'> - {loginError}</span>
                                )}
                            </h5>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
    
                        
                        <label className={this.fieldsFilled.password && !loginError ? '' : 'field-error'}>
                            <h5>
                                PASSWORD
                                {!this.fieldsFilled.password && (
                                    <span className='field-error-span'> - This field is required</span>
                                )}
                                {loginError && (
                                    <span className='field-error-span'> - {loginError}</span>
                                )}
                            </h5>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        
                        <button className="session-submit" type="submit" value='Login' >Login</button>
                    </div>
    
                    <section className='session-link'>
                        Need an account? <Link to='/register'>Register</Link>
                    </section>
                </div>

                <div className='demo'>
                    <Link to='/channels/@me' onClick={this.loginDemo.bind(this)}>
                        <div className='demo-icon'>
                            demo
                        </div>
                    </Link>
                    <Link to='/channels/@me' onClick={this.loginDemo.bind(this)}>
                        <h2>
                            Use a Demo Account
                        </h2>
                    </Link>
                    <h3>
                        Login with a <Link to='/channels/@me' onClick={this.loginDemo.bind(this)}>
                            demo account
                        </Link> to try Affinity instantly.
                    </h3>
                </div>
            </form>
        </div>
        );
    }
}