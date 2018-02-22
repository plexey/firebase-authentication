import styled from "styled-components";

const Content = styled.div`
  grid-column-start: content-2;
  grid-column-end: content-3;
  margin: 20px 0 0 0;
  font-family: ${props => props.theme.font};
  font-size: 16px;
`;

export default Content;
