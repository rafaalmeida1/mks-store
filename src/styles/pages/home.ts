import styled from 'styled-components';

export const HomeContainer = styled.section`
  padding: 116px 0 50px 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr)); 
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 18px 52px 0 52px;
  }
`;
