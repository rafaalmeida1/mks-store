import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 0.45rem;
    }
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme["gray100"]}
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme["blue"]};
      border-radius: 999px;
    }
  }
`;
