import React from 'react';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
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
        <div className="register-form-container">
            <form onSubmit={this.handleSubmit} className="register-form-box">
                <h2>
                    Create an account
                </h2>

                {this.renderErrors()}

                <div className="register-form">
                    <label>Email:
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="register-input"
                        />
                    </label>

                    <br/>
                    <label>Username:
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="register-input"
                        />
                    </label>

                    <br/>
                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="register-input"
                        />
                    </label>

                    <br/>
                    <input className="session-submit" type="submit" value='Continue' />
                </div>
            </form>
        </div>
        );
    }
}