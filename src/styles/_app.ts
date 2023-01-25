import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  max-width: 938px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
`;
