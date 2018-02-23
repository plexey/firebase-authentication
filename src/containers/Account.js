import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import PropTypes from "prop-types";
import { PasswordForgetForm } from "./PasswordForget";
import PasswordChangeForm from "./PasswordChange";
import withAuthorization from "./withAuthorization";
import Content from "../components/Content";
import ContentHeading from "../components/ContentHeading";
import Subheading from '../components/Subheading';

const AccountPage = ({ authUser }) => (
  <Content>
    <ContentHeading>Account</ContentHeading>
    <Subheading>{authUser.email}</Subheading>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </Content>
);

AccountPage.contextTypes = {
  authUser: PropTypes.object
};

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);
