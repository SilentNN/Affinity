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
        <div className="register-form-container">
            <form onSubmit={this.handleSubmit} className="register-form-box">
                
                <Link to="/" className='affinity-nav-logo'>
                    <img src={window.affinityLogoUrl} alt=""/>
                </Link>
                
                <h2>
                    Create an account
                </h2>

                <div className="register-form">
                    <label className={this.fieldsFilled.email || !emailError ? '' : 'field-error'}>
                        Email
                        {!this.fieldsFilled.email && (
                            <span className='field-error-span'> - This field is required</span>
                        )}
                        {emailError && (
                            <span className='field-error-span'> - {emailError}</span>
                        )}
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="register-input"
                        />
                    </label>

                    <br/>
                    <label className={this.fieldsFilled.username || !usernameError ? '' : 'field-error'}>
                        Username
                        {!this.fieldsFilled.username && (
                            <span className='field-error-span'> - This field is required</span>
                        )}
                        {usernameError && (
                            <span className='field-error-span'> - {usernameError}</span>
                        )}
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="register-input"
                        />
                    </label>

                    <br/>
                    <label className={this.fieldsFilled.password || !passwordError ? '' : 'field-error'}>
                        Password
                        {!this.fieldsFilled.password && (
                            <span className='field-error-span'> - This field is required</span>
                        )}
                        {passwordError && (
                            <span className='field-error-span'> - {passwordError}</span>
                        )}
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="register-input"
                        />
                    </label>

                    <br/>
                    <input className="session-submit" type="submit" value='Continue' />
                    
                    <p>
                        <Link to='/login'>Already have an account?</Link>
                    </p>
                    
                </div>
            </form>
        </div>
        );
    }
}