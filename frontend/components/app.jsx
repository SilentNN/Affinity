import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Splash from './splash/splash_container';

export default (
    () => (
        <div className='app'>
        <Switch>
          {/* <AuthRoute path={["/register", "/login"]} component={Session} />
          <ProtectedRoute path="/@me" component={Home} />
          <ProtectedRoute
            path="/channels/:serverId/:channelId"
            component={Server}
          /> */}
          <Route path="/" component={Splash} />
        </Switch>
        </div>
    )
);