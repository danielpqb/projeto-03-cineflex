import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    box-sizing: border-box;
  }
`;