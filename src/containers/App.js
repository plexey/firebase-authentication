import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
import baseStyles from "../basestyles";
import LandingPage from "./Landing";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import PasswordForgetPage from "./PasswordForget";
import HomePage from "./Home";
import AccountPage from "./Account";
import * as routes from "../constants/routes";
import withAuthentication from "./withAuthentication";
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const App = () => {
  baseStyles();
  return (
    <Router>
      <AppContainer>
        <Navigation />
        <Route exact path={routes.LANDING} component={() => <LandingPage />} />
        <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
        <Route
          exact
          path={routes.PASSWORD_FORGET}
          component={() => <PasswordForgetPage />}
        />
        <Route exact path={routes.HOME} component={() => <HomePage />} />
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      </AppContainer>
    </Router>
  );
};

export default withAuthentication(App);
