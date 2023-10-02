import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    /* LIGHT */
    --blue-light: #6FABCD;
    --yellow-light: #FFE49B;
    --red-light: #9F313A;
    /* DARK */ 
    --grey-dark: #414141 ;
    --purple-dark: #460046 ;
    /* GENERIC */
    --white: #fdfdfd;
    --black: #0e0e0e;
  }
  
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-size: 62,5%;
    box-sizing: border-box;

  }

  a{
    color: inherit;
  }

  
  ul li{
    list-style: none;
  }
  
  button:hover{
    background-color: var(--white);
    border-color: var(--black);
  }

  button:focus{
    border-color: black;
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

