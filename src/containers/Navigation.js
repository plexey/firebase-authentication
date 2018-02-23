import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import SignOutButton from "./SignOut";
import styled from "styled-components";
import * as routes from "../constants/routes";

const Wrapper = styled.div`
  background: ${props => props.theme.brandColor};
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  grid-row-start: main-1;
  grid-row-end: main-2;
  width: 100%;
  box-shadow: inset 0 -2px 0 0 black;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Heading = styled.h1`
  font-family: ${props => props.theme.font};
  display: flex;
  align-items: center;
  padding: 0 20px 0 20px;
  font-size: 25px;
  font-weight: bold;
`;

const activeClassName = "active-link";
const StyledLink = styled(NavLink).attrs({
  exact: true,
  activeClassName
})`
  display: flex;
  align-items: center;
  color: ${props => props.theme.textColor};
  font-size: 17px;
  text-decoration: none;
  background: none;
  padding: 0 25px 0 25px;
  font-weight: bold;
  transition: 200ms ease all;
  font-family: ${props => props.theme.font};

  ${StyledLink}:hover {
    background: hsl(0, 0%, 20%);
    color: ${props => props.theme.brandColor};
  }

  &.${activeClassName} {
    background: hsl(0, 0%, 20%);
    color: ${props => props.theme.brandColor};
  }
`;

const Navigation = ({ authUser }) => (
  <Wrapper>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</Wrapper>
);

Navigation.contextTypes = {
  authUser: PropTypes.object
};

const NavigationAuth = () => (
  <LinkList>
    <Heading>Placeholder</Heading>
    <StyledLink exact to={routes.LANDING}>
      Landing
    </StyledLink>
    <StyledLink exact to={routes.HOME}>
      Home
    </StyledLink>
    <StyledLink exact to={routes.ACCOUNT}>
      Account
    </StyledLink>
    <Spacer />
    <SignOutButton />
  </LinkList>
);

const NavigationNonAuth = () => (
  <LinkList>
    <Heading>Placeholder</Heading>
    <StyledLink exact to={routes.LANDING}>
      Landing
    </StyledLink>
    <Spacer />
    <StyledLink exact to={routes.SIGN_IN}>
      Sign In
    </StyledLink>
  </LinkList>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps, null, null, {
  pure: false
})(Navigation);
