import React from 'react';
import {render} from 'react-dom';
import Layout from './components/layout';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import LoginSignUp from './components/login'; 
import Signup from './components/signUp';
//render(<Layout/>, document.getElementById('app'));

render
(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <indexRoute path="loginsignup" component={LoginSignUp}></indexRoute>
            <Route path="signup" component={Signup}></Route>
        </Route>
    </Router>    
, document.getElementById('app'));