import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Pretendard', sans-serif;
    background-color: #f9f9f9;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .center {
    text-align: center;
  }
`;

export default GlobalStyles;
