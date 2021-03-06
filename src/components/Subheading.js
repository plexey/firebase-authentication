import styled from 'styled-components';

const Subheading = styled.h2`
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.font};
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 30px 0;
`

export default Subheading;