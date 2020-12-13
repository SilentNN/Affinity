import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import {AuthRoute, ProtectedRoute} from '../util/route_util';

import Splash from './splash/splash_container';
import SessionContainer from './session_form/session_container';
import HomeContainer from './home/home'

export default (
    () => (
        <div className='app theme-dark'>
        <Switch>
            <AuthRoute exact path={['/login', '/register']} component={SessionContainer} />
            <ProtectedRoute path="/channels/@me" component={HomeContainer} />
            {/* <ProtectedRoute
                path="/channels/:serverId/:channelId"
                component={Server}
            /> */}
            <Route path="/" component={Splash} />
        </Switch>
        </div>
    )
);