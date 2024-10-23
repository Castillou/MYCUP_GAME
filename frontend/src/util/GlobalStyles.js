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
    background-color: #f4f4f4;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
