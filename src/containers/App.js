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
import ContentWrapper from '../components/ContentWrapper';
import styled, { ThemeProvider } from "styled-components";

const theme = {
  brandColor: "hsl(140, 70%, 65%)",
  textColor: "hsl(0, 0%, 20%)",
  font: "'Oxygen', sans-serif",
};

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: [main-1] 60px [main-2] auto [main-3];
`;

const App = () => {
  baseStyles();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Navigation />
          <ContentWrapper>
            <Route
              exact
              path={routes.LANDING}
              component={() => <LandingPage />}
            />
            <Route
              exact
              path={routes.SIGN_UP}
              component={() => <SignUpPage />}
            />
            <Route
              exact
              path={routes.SIGN_IN}
              component={() => <SignInPage />}
            />
            <Route
              exact
              path={routes.PASSWORD_FORGET}
              component={() => <PasswordForgetPage />}
            />
            <Route exact path={routes.HOME} component={() => <HomePage />} />
            <Route
              exact
              path={routes.ACCOUNT}
              component={() => <AccountPage />}
            />
          </ContentWrapper>
        </AppContainer>
      </ThemeProvider>
    </Router>
  );
};

export default withAuthentication(App);
