import React from "react";
// import PropTypes from "prop-types";

import { connect } from "react-redux";
import { firebase } from "../firebase";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { onSetAuthUser } = this.props;

      firebase.auth.onAuthStateChanged(authUser => {
        authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
      });
    }

    render() {
      return <Component />;
    }
  }

  const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser => dispatch({ type: "AUTH_USER_SET", authUser })
  });

  // WithAuthentication.childContextTypes = {
  //   authUser: PropTypes.object
  // };

  return connect(null, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;
