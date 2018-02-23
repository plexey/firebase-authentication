import styled from "styled-components";

const ContentWrapper = styled.div`
  grid-row-start: main-2;
  grid-row-end: main-3;
  min-height: 100vh;
  display: grid;
  grid-template-columns: [content-1] 15% [content-2] auto [content-3] 15% [content-4];
  width: 100%;
  /* background: hsl(0, 0%, 90%); */
  background-color: #e6e6e6;
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1d1d1' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
`;

export default ContentWrapper;
