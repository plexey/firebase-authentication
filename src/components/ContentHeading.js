import styled from 'styled-components';

const ContentHeading = styled.h1`
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.font};
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 20px 0;
`

export default ContentHeading;