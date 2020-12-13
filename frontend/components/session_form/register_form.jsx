import React from 'react';
import {Link} from'react-router-dom';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fieldsFilled = {
            email: true,
            password: true,
            username: true,
        };
    }
    
    componentWillMount() {
        this.props.clearSessionErrors()
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    filledRequiredFields({email, password, username}) {
        let allFilled = true;

        if (email.length) {
            this.fieldsFilled.email = true;
        } else {
            this.fieldsFilled.email = false;
            allFilled = false;
        }

        if (username.length) {
            this.fieldsFilled.username = true;
        } else {
            this.fieldsFilled.username = false;
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

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        if (this.filledRequiredFields(user)) {
            this.props.processForm(user);
        } else {
            this.forceUpdate();
        }
    }

    render() {
        const emailError = this.props.errors.find((error) => error.match(/[eE]mail/));
        const usernameError = this.props.errors.find((error) => error.match(/sername/));
        const passwordError = this.props.errors.find((error) => error.match(/assword/));

        return (
        <div className="session-form-container">
            <form onSubmit={this.handleSubmit} className="session-form">
                
                <div className='main-register-form'>
                    <h2>
                        Create an account
                    </h2>
    
                    <div className="session-form-inputs">
                        <label className={this.fieldsFilled.email && !emailError ? '' : 'field-error'}>
                            <h5>
                                Email
                                {!this.fieldsFilled.email && (
                                    <span className='field-error-span'> - This field is required</span>
                                )}
                                {emailError && (
                                    <span className='field-error-span'> - {emailError}</span>
                                )}
                            </h5>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="session-input"
                            />
                        </label>
    
                        
                        <label className={this.fieldsFilled.username && !usernameError ? '' : 'field-error'}>
                            <h5>
                                Username
                                {!this.fieldsFilled.username && (
                                    <span className='field-error-span'> - This field is required</span>
                                )}
                                {usernameError && (
                                    <span className='field-error-span'> - {usernameError}</span>
                                )}
                            </h5>
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="session-input"
                            />
                        </label>
    
                        
                        <label className={this.fieldsFilled.password && !passwordError ? '' : 'field-error'}>
                            <h5>
                                Password
                                {!this.fieldsFilled.password && (
                                    <span className='field-error-span'> - This field is required</span>
                                )}
                                {passwordError && (
                                    <span className='field-error-span'> - {passwordError}</span>
                                )}
                            </h5>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="session-input"
                            />
                        </label>
    
                        
                        <button className="session-submit" type="submit">Continue</button>
                        
                        <Link to='/login' className='session-link'>Already have an account?</Link>
    
                        <section className='session-footnote'>
                            By registering, you agree to Affinity's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                        </section>
                        
                    </div>
                </div>
            </form>
        </div>
        );
    }
}