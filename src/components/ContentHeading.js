import styled from 'styled-components';

const ContentHeading = styled.h1`
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.font};
  font-size: 26px;
  font-weight: bold;
  margin: 0 0 40px 0;
`

export default ContentHeading;