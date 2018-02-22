import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import withAuthorization from "./withAuthorization";
import { db } from "../firebase";
import Content from '../components/Content';
import ContentHeading from '../components/ContentHeading';
import Subheading from '../components/Subheading';

class HomePage extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;

    db.onceGetUsers().then(snapshot => onSetUsers(snapshot.val()));
  }

  render() {
    const { users } = this.props;
    return (
      <Content>
        <ContentHeading>Home</ContentHeading>
        <p>The Home Page is accessible by every signed in user.</p>

        {!!users && <UserList users={users} />}
      </Content>
    );
  }
}

const UserList = ({ users }) => (
  <div>
    <Subheading>List of Usernames of Users</Subheading>
    <p>(Saved on Sign Up in Firebase Database)</p>
    <br />

    {Object.keys(users).map(key => <div key={key}>{users[key].username}</div>)}
  </div>
);

const mapStateToProps = state => ({
  users: state.userState.users
});

const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: "USERS_SET", users })
});

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
