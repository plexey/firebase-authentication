import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { SignUpLink } from "./SignUp";
import { PasswordForgetLink } from "./PasswordForget";
import { auth } from "../firebase";
import * as routes from "../constants/routes";
import Content from "../components/Content";
import Input from '../components/Input';
import Button from '../components/Button';
import ContentHeading from '../components/ContentHeading';

const SignInPage = ({ history }) => (
  <Content>
    <ContentHeading>SignIn</ContentHeading>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </Content>
);

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
        <form onSubmit={this.onSubmit}>
          <Input
            value={email}
            onChange={event =>
              this.setState(byPropKey("email", event.target.value))
            }
            type="text"
            placeholder="Email Address"
          />
          <Input
            value={password}
            onChange={event =>
              this.setState(byPropKey("password", event.target.value))
            }
            type="password"
            placeholder="Password"
          />
          <Button disabled={isInvalid} type="submit">
            Sign In
          </Button>

          {error && <p>{error.message}</p>}
        </form>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };
