import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 414px) {
      font-size: 14px;
    }

    @media (max-width: 300px) {
      font-size: 13px;
    }

    body {
      background: ${({ theme }) => theme.colors.lightGray};
      font-family: Helvetica, sans-serif;

      input, textarea, select, button {
        outline: none;
        border: none;
        font-family: Helvetica, sans-serif;
      }

      input, textarea, select {
        font-size: .875rem;
        background: ${({ theme }) => theme.colors.lightColor};
      }

      button {
        font-size: 1rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primaryColor};
        cursor: pointer;
      }

      ul, li {
        list-style: none;
      }

      a {
        text-decoration: none;
      }

      svg {
        display: block;
      }
    }
  }
`;

export default GlobalStyles;
