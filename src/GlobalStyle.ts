import { Color } from "./utils/Config";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {

  font-family:Rubik;
  line-height: 1.5;
  font-weight: 400;

  //color-scheme: light dark;
  color: ${Color.alternative};
  background-color: ${Color.secondary};

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  overflow-x: hidden;
}
body::-webkit-scrollbar{
        width: 0px;
    }
    html{
        scroll-behavior: smooth;
    }
    body::-webkit-scrollbar-thumb{
        border-radius: 0px;
        
    }

    a {
  text-decoration: inherit;
  color: ${Color.alternative};
  opacity: 0.4;
  //color: #8491A0;
 
}
a:hover {
  opacity: 1;
      filter: drop-shadow(0 0 1.5em ${Color.alternative});
    }

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 5px;
  border: 1px solid  ${Color.alternative};
  padding: 0.4em 1.2em;
  font-size: .9em;
  font-weight: 500;
  font-family: inherit;
  background-color: transparent;
  color: ${Color.alternative};

  cursor: pointer;
  transition: 0.25s;
}
button:hover {
  background-color: ${Color.alternative};
  color: ${Color.secondary};
  border-color: ${Color.alternative};
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.title-section-back{
  position: absolute;
  top: 0;
  font-size:150px;
  opacity: 0.05;
  font-family: "Abril Fatface";
}
/*
.section-title{
  display: grid;
  width: 100%;
      text-align: center;
      justify-content: center;
    margin: 100px 0 50px 0;
    gap: 20px;
}*/


.abril{
  font-family: "Abril Fatface";
}
img{
  border-radius: 3px;
}
h1, h2, h3, h4, h5, p{
  margin: 0;
  padding:0;
}

  .line-short,
  .line-long {
    background-color: ${Color.alternative};
    opacity: 0.4;
    border-radius: 5px;
    width: 2px;
  }
  .line-short {
    height: 10%;
  }
  .line-long {
    height: 100%;
  }
  .line-horizontal-short,
   .line-horizontal-long{
      background-color: ${Color.alternative};
      opacity:0.4;
      height: 2px;
   }
  .line-horizontal-short{
      width: 20%;
   }

   .line-horizontal-long{
      width: 100%;
   }

   .title-section-container{
      padding: 50px 0;
      display:flex;
      width: 100%;
      align-items: center;
      gap: 20px;
      
   }
   .section-title{
      line-height:1;
      white-space: nowrap;
   }


  
  @media screen and (max-width: 600px) {
  
h1 {
  font-size: 70px;
}
h2 {
  font-size: 60px;
}
h3 {
  font-size: 50px;
}
h4 {
  font-size: 40px;
}
h5 {
  font-size: 30px;
}
h6 {
  font-size: 20px;
}
p{
  font-size: 12px;
}
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    h1 {
  font-size: 80px;
}
h2 {
  font-size: 70px;
}
h3 {
  font-size: 60px;
}
h4 {
  font-size: 50px;
}
h5 {
  font-size: 40px;
}
h6 {
  font-size: 25px;
}
p{
  font-size: 13px;
}
  }

  @media screen and (min-width: 1201px) {
    h1 {
  font-size: 100px;
}
h2 {
  font-size: 80px;
}
h3 {
  font-size: 70px;
}
h4 {
  font-size: 60px;
}
h5 {
  font-size: 45px;
}
h6 {
  font-size: 30px;
}
p{
  font-size: 14px;
}
  }
/*
@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #475A71;
  }
  button {
    background-color: #f9f9f9;
  }
}*/


`;
