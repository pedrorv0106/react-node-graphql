import { createGlobalStyle } from 'styled-components';
import fontDollyDots from 'assets/fonts/dollydots.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'DollyDots';
    font-style: normal;
    font-weight: 400;  
    src: url('${fontDollyDots}');
  }
  
  body {
    margin: 0;
    background-color: #000;
    font-family: Roboto, "Helvetica Neue", sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
  }
  
  #root {
    height: 100vh;
  }
`;
