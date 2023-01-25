import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  min-height: 17.5rem;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.4);
  }

  button {
    margin-top: auto !important;
    background: ${({theme}) => theme.blue};
    height: 32px;
    padding: .5rem;
    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    border-radius: 0px 0px 8px 8px;
    color: white;
    

    cursor: pointer;
    transition: opacity 0.2s; 

    span {
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const CardContent = styled.div`
  padding: 18px 4px 12px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    object-fit: contain;
    margin-bottom: 0.75rem;

    transition: scale 0.2s linear;

    &:hover {
      scale: 1.1
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;
    gap: 1rem;

    strong {
      flex: 1;
      font-size: 16px;
      line-height: 16px;
      color: ${({ theme }) => theme.gray500};
      font-weight: 400;
      width: 50%;
    }

    span {
      padding: 0.5rem;
      background: ${({ theme }) => theme.gray600};
      border-radius: 5px;
      color: ${({ theme }) => theme.white};
      font-weight: 700;
      font-size: 15px;
      line-height: 15px;
    }
  }

  p {
    padding-left: 6px;
    font-weight: 300;
    font-size: 12px;
    line-height: 12px;
    color: ${({theme}) => theme.gray500};
  } 
`;
