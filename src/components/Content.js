import styled from "styled-components";

const Content = styled.div`
  grid-column-start: content-2;
  grid-column-end: content-3;
  margin: 60px 0 60px 0;
  font-family: ${props => props.theme.font};
  display: flex;
  flex-direction: column;
  font-size: 16px;
  background: white;
  border-radius: 4px;
  padding: 30px;
  border: solid 2px hsl(0, 0%, 20%);
`;

export default Content;
