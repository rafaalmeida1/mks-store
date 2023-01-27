import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 28px 88px 27px 65px;
  background-color: ${({ theme }) => theme.blue};
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 19px;
    color: ${({ theme }) => theme.white};

    span {
      font-size: 20px;
      line-height: 19px;
      font-weight: 300;
      opacity: 0.8;
    }
  }

  @media (max-width: 484px) {
    padding: 28px 15px 27px 15px;
  }
`;

export const OpenCartButton = styled.button`
    width: 90px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    position: fixed;
    top: 2%;
    right: 6%;

    border: 1px solid #000;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    transition: all 0.2s linear;

    span {
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
    }

    &:hover {
      box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
      svg {
        fill: ${({ theme }) => theme.blue};
      }
    }
`
