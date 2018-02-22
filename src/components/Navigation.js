import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import SignOutButton from "./SignOut";
import styled from "styled-components";
import * as routes from "../constants/routes";

const Wrapper = styled.div`
  background: hsl(0, 50%, 50%);
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: row;
`;

const activeClassName = "active-link";
const StyledLink = styled(NavLink).attrs({
  exact: true,
  activeClassName
})`
  display: flex;
  align-items: center;
  color: white;
  font-size: 17px;
  text-decoration: none;
  background: blue;
  /* height: 100%; */
  padding: 0 15px 0 15px;
  font-weight: bold;
  transition: 200ms ease all;
  /* height: 100%; */

  &.${activeClassName} {
    color: yellow;
    background: hsl(0, 0%, 20%);
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
      <StyledLink exact to={routes.LANDING}>Landing</StyledLink>
      <StyledLink exact to={routes.HOME}>Home</StyledLink>
      <StyledLink exact to={routes.ACCOUNT}>Account</StyledLink>
      <SignOutButton />
  </LinkList>
);

const NavigationNonAuth = () => (
  <LinkList>
      <StyledLink exact to={routes.LANDING}>Landing</StyledLink>
      <StyledLink exact to={routes.SIGN_IN}>Sign In</StyledLink>
  </LinkList>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps, null, null, {
  pure: false
})(Navigation);
