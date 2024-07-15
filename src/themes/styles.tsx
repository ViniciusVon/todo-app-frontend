import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

  * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font-family: 'Raleway', sans-serif;
  }

  body {
      background-color: ${({ theme }) => theme.colors.primary}; // Corrigido para 'primary'
  }
`;
