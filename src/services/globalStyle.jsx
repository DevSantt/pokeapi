import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    /* LIGHT */
    --sky-blue-light: #6FABCD;
    --pastel-yellow-light: #FFE49B;
    --red-light: #9F313A;
    /* DARK */ 
    --primary-color-dark: ;
    --secondary-color-dark: ;
    --tertiary-color-dark: ;
    /* GENERIC */
    --white: #F4F9FD;
    --black: #000;
  }
  
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-size: 62,5%;
    background-color: var(--sky-blue-light);
    box-sizing: border-box;

  }

  body{
    height: 100vh;
  }
  
  ul li{
    list-style: none;
  }
  
  @keyframes floating {
    0%{
      bottom: 40px;
    }

    100%{
      bottom: 30px;
    }
  }

`

