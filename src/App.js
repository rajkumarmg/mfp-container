import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import {createBrowserHistory} from 'history';

import Progress from './components/Progress';
import Header from './components/Header';

// const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
// const DashboardLazy = lazy(() => import('./components/DashboardApp'));
const UserLazy = lazy(() => import('./components/UserApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setSignedIn] = useState(false);
    useEffect(() => {
        if(isSignedIn) {
            history.push('/user');
        }
    }, [isSignedIn]);
    return (

        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header onSignOut={() => {
                        localStorage.clear();
                        setSignedIn(false)
                    }} isSignedIn={isSignedIn} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth">
                                <AuthLazy onSignIn={(data) => {
                                    console.log(data.access_token);
                                    localStorage.setItem("ipss_access_token", data.access_token);
                                    setSignedIn(true);
                                }} />
                            </Route>
                            <Route path="/user">
                                {!isSignedIn && <Redirect to="/"/>}
                                <UserLazy  />
                            </Route>
                            
                            <Route path="/">
                                <AuthLazy onSignIn={(data) => {
                                    console.log(data.access_token);
                                    localStorage.setItem("ipss_access_token", data.access_token);
                                    setSignedIn(true);
                                }}/>
                            </Route>
                        </Switch>
                    </Suspense>

                </div>
            </StylesProvider>
        </Router >



    );
};