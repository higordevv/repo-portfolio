import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 
*{
    margin : 0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
body{
  overflow: hidden;
}
img {
    max-width: 100%;
    display: block;
  }
::-webkit-scrollbar {
  width: 0px;              
}
  ::-webkit-scrollbar-track {
    background: transparent;        
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;    
    border-radius: 20px;     
  }
`;
