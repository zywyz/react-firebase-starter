import React from 'react';
import {  Switch, Route } from 'react-router-dom';

import Wrapper from './RouterWrapper';
import ScrollToTop from './ScrollToTop';

import App from '../AppContainer/App';
import WelcomePage from '../WelcomePage/WelcomePage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import ForgottenPassword from '../RegisterPage/ForgottenPassword';

const Router = (props) => (
  <Wrapper>
    <ScrollToTop>
      <Switch>
        <Route exact path='/' component={WelcomePage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/register' component={RegisterPage}/>
        <Route path='/forgotten-password' component={ForgottenPassword}/>
        <Route path='/u' component={App}/>  {/* restricted for logged users only */}
      </Switch>
    </ScrollToTop>
  </Wrapper>
)

export default Router;