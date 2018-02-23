import React from 'react';
import styled from 'styled-components';
import { auth } from '../firebase';

const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${props => props.theme.textColor};
  font-size: 17px;
  text-decoration: none;
  background: none;
  padding: 0 15px 0 15px;
  font-weight: bold;
  transition: 200ms ease all;
  border: none;
  font-family: ${props => props.theme.font};
  cursor: pointer;

  ${Button}:hover {
    background: hsl(0, 0%, 20%);
    color: ${props => props.theme.brandColor};
  }
`

const SignOutButton = () =>
  <Button
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </Button>

export default SignOutButton;