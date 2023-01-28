import styled, { keyframes } from "styled-components";

const backgroundAnimation = keyframes`
  from {
      backgroundPosition: -200px 0;
  }

  to {
      background-position: calc(200px + 100%) 0;
  }
`;

export const ProductSkeletonContainer = styled.div`
  width: 100%;
  min-height: 17.5rem;
  background-color: ${({ theme }) => theme.white};
  background-image: linear-gradient(90deg, white, #e5e5e5 ,white );
  border-radius: 8px;

  animation: ${backgroundAnimation} 1300ms ease-in-out infinite;
`;
