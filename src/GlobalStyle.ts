import { Color } from "./utils/Config";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {

  //font-family:Rubik;
  font-family:Lato;
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
.app{
        visibility:hidden; 
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
  opacity: 0.75;
  transition: 0.15s;
  //color: #8491A0;
 
}
a:hover {
  opacity: 1;
      filter: drop-shadow(0 0 1.5em ${Color.alternative});
      transform: scale(1.02);
    }

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}




button {
  display: flex;
  align-items: center;
  gap:10px;
  border-radius: 100px;
  border: 1px solid  ${Color.active};
  padding: 12px 24px;
  font-size: .9em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${Color.active};
  color: ${Color.alternative};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);

  cursor: pointer;
  transition: 0.25s;
}
button:hover {
  background-color: ${Color.alternative};
  color: ${Color.active};
  border-color: ${Color.alternative};
  filter: drop-shadow(0 0 1.5em ${Color.alternative}4d);

}
button:focus,
button:focus-visible {
  //outline: 4px auto -webkit-focus-ring-color;
}



.abril{
  font-family: "Abril Fatface";
}
img{
  border-radius: 3px;
}
h1, h2, h3, h4, h5,h6 , p{
  margin: 0;
  padding:0;
  font-weight: normal;
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
    /*transform: translate(-50%, 0%);    
    left: 50%;
    top: 0;*/
    max-width: 1200px;
    width: 100%;
      display:flex;
      padding-inline: 20px;
      box-sizing: border-box;
      z-index: 5;
   }
   .section-title{
    font-weight: normal;
      line-height:1;
      white-space: nowrap;
      padding: 12px 24px;
      background-color: ${Color.alternative}1a;
      border-radius:0 0 10px 10px;
      border: 1px solid ${Color.alternative};
      border-top: 0;
      color: ${Color.alternative};
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);


   }

   ul{
    list-style: none;
    margin: 0;
    padding: 0;
   }

   img, video{
    user-select: none;
   }
  
  @media screen and (max-width: 600px) {
    .title-section-container{
      justify-content: center;

    }
  
h1 {
  font-size: 70px;
}
h2 {
  font-size: 55px;
}
h3 {
  font-size: 40px;
}
h4 {
  font-size: 30px;
}
h5 {
  font-size: 25px;
}
h6 {
  font-size: 16px;
}
p{
  font-size: 13px;
}
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    h1 {
  font-size: 80px;
}
h2 {
  font-size: 65px;
}
h3 {
  font-size: 50px;
}
h4 {
  font-size: 40px;
}
h5 {
  font-size: 28px;
}
h6 {
  font-size: 17px;
}
p{
  font-size: 14px;
}
  }

  @media screen and (min-width: 1201px) {
    h1 {
  font-size: 90px;
}
h2 {
  font-size: 75px;
}
h3 {
  font-size: 60px;
}
h4 {
  font-size: 45px;
}
h5 {
  font-size: 30px;
}
h6 {
  font-size: 18px;
}
p{
  font-size: 15px;
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
