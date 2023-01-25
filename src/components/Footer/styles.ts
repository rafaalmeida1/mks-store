import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: auto;
  padding: 8px 0 9px 0;
  background: ${({ theme }) => theme.gray200};

  P {
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
  }
`;
