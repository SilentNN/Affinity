import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.currentUserId]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
})

class Home extends React.Component {
    render () {
        return (
            <div className='home-container'>
                <p>
                    Welcome, {this.props.currentUser.username}#{this.props.currentUser.discriminator}
                </p>
    
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(Home);