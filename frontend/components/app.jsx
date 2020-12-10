import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import {AuthRoute, ProtectedRoute} from '../util/route_util';

import Splash from './splash/splash_container';
import RegisterFormContainer from './session_form/register_form_container';
import LogInFormContainer from './session_form/login_form_container';

export default (
    () => (
        <div className='app'>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/register" component={RegisterFormContainer} />
            {/* <ProtectedRoute path="/channels/@me" component={Home} />
            <ProtectedRoute
                path="/channels/:serverId/:channelId"
                component={Server}
            /> */}
            <Route path="/" component={Splash} />
        </Switch>
        </div>
    )
);