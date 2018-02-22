import styled from 'styled-components';

const Input = styled.input`
  background: hsl(0, 0%, 95%);
  border: none;
  border-radius: 3px;
  padding: 10px;
  font-family: ${props => props.theme.font};
  font-size: 16px;
  color: ${props => props.theme.textColor};
  min-width: 200px;
  margin: 0 10px 10px 0;
`

export default Input;