import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.theme.brandColor};
  color: ${props => props.theme.textColor};
  border: none;
  border-radius: 3px;
  font-family: ${props => props.theme.font};
  font-size: 16px;
  padding: 10px 15px 10px 15px;
  cursor: pointer;
  font-weight: bold;
  border: solid 2px hsl(0, 0%, 20%);

  ${Button}:hover {
    color: ${props => props.theme.brandColor};
    background: ${props => props.theme.textColor};
  }
`;

export default Button;
