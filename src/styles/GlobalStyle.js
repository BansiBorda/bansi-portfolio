import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: ${({ theme }) => theme.body};
    --text: ${({ theme }) => theme.text};
  }

  body {
    background-color: var(--background);
    color: var(--text);
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    height: 100vh;
    overflow: hidden;
  }

  #root {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
