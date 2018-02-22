import styled from "styled-components";

const ContentWrapper = styled.div`
  grid-row-start: main-2;
  grid-row-end: main-3;
  min-height: 100vh;
  display: grid;
  grid-template-columns: [content-1] 15% [content-2] auto [content-3] 15% [content-4];
  width: 100%;
  background: hsl(0, 0%, 80%);
`;

export default ContentWrapper;
