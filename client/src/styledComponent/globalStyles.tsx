import {createGlobalStyle} from "styled-components";

export const DefaultGlobalStyle = createGlobalStyle`
  
  body{
    padding: 0;
    margin: auto;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  
  a{
    text-decoration: none;
    color: ${props => props.theme.colors.mainTextColor}
  }
`;