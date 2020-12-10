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
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return(
        <ul>
            {this.props.errors.map((error, idx) => (
            <li key={`error-${idx}`}>
                {error}
            </li>
            ))}
        </ul>
        );
    }

    render() {
        return (
        <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
                <h2>
                    Welcome back!
                </h2>

                <h3>
                    We're so excited to see you again!
                </h3>

                {this.renderErrors()}

                <div className="login-form">
                    <label>Email:
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                        />
                    </label>

                    <br/>
                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                        />
                    </label>

                    <br/>
                    <input className="session-submit" type="submit" value='Login' />
                </div>

                <p>
                    Need an account? <Link to='/register'>Register</Link>
                </p>
            </form>
        </div>
        );
    }
}