import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
  }
`;

export const Colors = {
  primary100: '#7FFFD4',
  primary200: '#72A0C1',
  primary300: '#7CB9E8',
  primary400: '#0039a6',
}

export default GlobalStyle;