import { Color } from "../../utils/Config";
import styled from "styled-components";

export const NavegatorBox = styled.nav`
  //font-family: "Abril Fatface";

  #header-nav {
    z-index: 10;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 15%;
    left: 0;
    right: 0;
    top: 0px;
    background: linear-gradient(
      ${Color.secondary},
      ${Color.secondary}bf,
      ${Color.secondary}80,
      transparent
    );
    transition: top 0.25s ease-out, opacity 0.25s ease-out;
    padding: 0;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    background-color: ${Color.secondary};
    border-radius: 100px;
    padding: 12px 24px;
    margin: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);

  }

  .nav-menu-container {
    display: flex;
    gap: 20px;
  }

  .nav-container {
    box-sizing: border-box;
    padding: 0 5%;
    //max-width: 1200px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }

  .nav-item {
    display: inline-block;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    
  }
  .nav-link {
    text-decoration: none;
    display: inline-flex;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  .logo-container {
    display: flex;
    height: 100%;
    align-items: center;
    gap: 20px;
  }
  .logo-img-container {
    background-color: ${Color.active};
    border-radius: 25%;
    padding: 8px;
    cursor: pointer;
    transition: 0.25s;

    &:hover {
      filter: drop-shadow(0 0 1.5em ${Color.alternative});
      background-color: ${Color.alternative};
    }
  }

  .logo-img {
    display: flex;
    width: 25px;
    height: 25px;
  }

  .logo-text {
    line-height: 1.2;
  }
  .logo-title,
  .logo-subtitle {
    &:hover {
      filter: drop-shadow(0 0 1.5em ${Color.alternative});
      opacity: 1;
    }
  }
  .logo-title {
    text-transform: uppercase;
    transition: color 0.15s ease-in-out;
    margin: 0;
    color: ${Color.alternative};
    cursor: pointer;
  }
  .logo-subtitle {
    transition: color 0.15s ease-in-out;
    margin: 0;
    color: ${Color.alternative};
    cursor: pointer;
    opacity: 0.75;
  }
  .country-container {
    font-weight: bold;
    transition: 0.25s;
  }
  .paraguay {
    &:hover{
      opacity: 1;
      filter: drop-shadow(0 0 1em ${Color.alternative});

    }
  }
  .bolivia {
    opacity: 1;
    filter: drop-shadow(0 0 1em ${Color.alternative});
  }

  .B {
    color: red;
  }
  .O {
    color: yellow;
  }
  .L {
    color: green;
  }

  .P {
    color: red;
  }
  .A {
    color: white;
  }
  .R {
    color: blue;
  }

  .hamburger {
    display: flex;
    cursor: pointer;
    
  }
  .icon-movil-container {
    display: grid;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    background-color: ${Color.active};
    border-radius: 50%;
    transition: 0.25s;

    &:hover { 
      filter: drop-shadow(0 0 1em ${Color.alternative}80);
      background-color: ${Color.alternative};
      color: ${Color.active};
    }
  }
  .icon-movil {
    
    display: flex;
    
    //height: 100%;
    //width: 1.2em;
  }

  @media screen and (max-width: 600px) {
    .hamburger {
      display: flex;
      width: 100%;
      justify-content: right;
    }
    .nav-item-cotizar {
      display: none;
    }
    .nav-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .nav-menu {
      list-style: none;
      display: none;
      position: fixed;
      align-content: center;
      justify-content: center;
      background-color: ${Color.secondary};
      border-radius: 0;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      text-align: center;
      z-index: 20;
      gap: 10px;
      font-size: 1.4em;
      font-weight: bold;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    .nav-item-cotizar {
      display: none;
    }
    .hamburger {
      display: flex;
      width: 100%;
      justify-content: right;
    }
    .nav-menu {
      list-style: none;
      display: none;
      position: fixed;
      align-content: center;
      justify-content: center;
      background-color: ${Color.secondary};
      border-radius: 0;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      text-align: center;
      z-index: 20;
      gap: 10px;
      font-size: 1.4em;
    }
    .nav-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 1201px) {
    .nav-menu {
      list-style: none;
      font-size: 0.9em;
      display: flex;
      gap: 20px;

      //font-family: "Roboto Mono";
      //font-family: "Bebas Neue";
      //font-family: 'Courier New', Courier, monospace;
    }
    .hamburger {
      display: none;
    }
  }
`;
