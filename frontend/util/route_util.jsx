import React from "react";
import {Route, Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn ? <Redirect to="/channels/@me" /> : <Component {...props} />
        }
    />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={(props) => 
            loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        }
    />
);

const mSTP = state => {
    return { loggedIn: Boolean(state.session.currentUserId) };
};

export const AuthRoute = withRouter(
    connect(
        mSTP,
        null
    )(Auth)
);

export const ProtectedRoute = withRouter(
    connect(
        mSTP,
        null
    )(Protected)
);